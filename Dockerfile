FROM node:24.13.0-bookworm-slim AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24.13.0-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3001 DATA_DIR=/app/var
COPY --from=build /app/dist ./dist
COPY package.json ./
COPY server ./server
COPY src/logic/news/newsSource.ts ./src/logic/news/newsSource.ts
COPY src/data/news ./src/data/news
RUN mkdir /app/var && chown node:node /app/var
USER node
EXPOSE 3001
CMD ["node", "server/index.ts"]
