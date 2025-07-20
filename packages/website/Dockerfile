FROM node:20.19-alpine as base

# Set working directory
WORKDIR /app

# Copy root package.json and yarn.lock for workspace dependencies
COPY package.json yarn.lock ./

# Copy all package.json files to establish workspace structure
COPY packages/react/package.json ./packages/react/package.json
COPY packages/website/package.json ./packages/website/package.json

# Clear yarn cache and install dependencies
RUN yarn cache clean
RUN yarn install --frozen-lockfile

FROM base AS builder

# Copy all source files
COPY packages/ ./packages/

# Verify workspace resolution
RUN yarn workspace website why nayan

# Build nayan package first
RUN yarn workspace nayan build

# Build website
RUN yarn workspace website build:website

FROM node:20.19-alpine as runner

# Set working directory
WORKDIR /app

# Copy root package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy package.json files
COPY packages/react/package.json ./packages/react/package.json
COPY packages/website/package.json ./packages/website/package.json

# Copy built nayan package from builder stage to ensure workspace dependency works
COPY --from=builder /app/packages/react/dist ./packages/react/dist
COPY --from=builder /app/packages/react/package.json ./packages/react/package.json

# Clear cache and install only production dependencies
RUN yarn cache clean
RUN yarn install --frozen-lockfile --production

# Copy built website from builder stage
COPY --from=builder /app/packages/website/dist ./packages/website/dist
COPY --from=builder /app/packages/website/public ./packages/website/public
COPY --from=builder /app/packages/website/server.js ./packages/website/
COPY --from=builder /app/packages/website/index.html ./packages/website/

# Set environment
ENV NODE_ENV=production

# Change to website directory
WORKDIR /app/packages/website

# Expose port
EXPOSE 7100

# Start the application
CMD ["npm", "run", "preview"]