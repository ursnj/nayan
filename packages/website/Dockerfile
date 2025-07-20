FROM node:20.19-alpine as base

# Set working directory
WORKDIR /app

# Install yarn globally
RUN npm install -g yarn

# Copy root package.json and yarn.lock for workspace dependencies
COPY package.json yarn.lock ./
COPY packages/react/package.json ./packages/react/
COPY packages/website/package.json ./packages/website/

# Install dependencies
RUN yarn install --frozen-lockfile

FROM base AS builder

# Copy all source files
COPY . .

# Build nayan package first
RUN yarn workspace nayan build

# Build website
RUN yarn workspace website build:website

FROM node:20.19-alpine as runner

# Set working directory
WORKDIR /app

# Install yarn globally
RUN npm install -g yarn

# Copy package files for production dependencies
COPY package.json yarn.lock ./
COPY packages/website/package.json ./packages/website/

# Install only production dependencies
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

# Run the application
CMD ["npm", "run", "preview"]