FROM oven/bun:latest

USER root
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build:website

EXPOSE 7100

CMD ["bun", "run", "preview"]
