FROM node:20.19-alpine as base

# Set working directory
WORKDIR /app

# Copy the entire monorepo (all packages and configs)
COPY . .

# Clean and install dependencies with proper workspace linking
RUN yarn cache clean
RUN rm -rf node_modules yarn.lock packages/website/node_modules packages/react/node_modules
RUN yarn install --force

FROM base AS builder

# Verify workspace resolution and show what's being used
RUN yarn workspace website why nayan
RUN ls -la packages/react/
RUN cat packages/react/package.json | grep version

# Build nayan package first to ensure it's available
RUN yarn workspace nayan build

# Verify the built package exists
RUN ls -la packages/react/dist/

# Build website with the local workspace nayan
RUN yarn workspace website build:website

FROM node:20.19-alpine as runner

# Set working directory
WORKDIR /app

# Copy root package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy package.json files to maintain workspace structure
COPY packages/react/package.json ./packages/react/package.json
COPY packages/website/package.json ./packages/website/package.json

# Copy the entire built nayan package to maintain workspace resolution
COPY --from=builder /app/packages/react/ ./packages/react/

# Install dependencies (this should resolve to the local workspace)
RUN yarn install --frozen-lockfile --production --non-interactive

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