FROM node:20.19-alpine as base

# Copy sources
USER root
WORKDIR /ui
COPY package.json ./

# Build project
FROM base AS builder
RUN npm install --force --silent
COPY . .
RUN npm run build

# Copy project
FROM base
RUN npm install --force --only=production
ENV NODE_ENV=production
COPY . .
COPY --from=builder /ui/build ./build

# Run project
EXPOSE 7100
CMD ["npm", "run", "preview"]