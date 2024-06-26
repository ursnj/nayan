FROM node:20.11-alpine

USER root
WORKDIR /app
COPY . .
RUN npm i --force
RUN npm run build:website

EXPOSE 7100

CMD ["npm", "run", "preview"]
