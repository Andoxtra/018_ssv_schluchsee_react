FROM node:24.13.0-bookworm-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24.13.0-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3001 DATA_DIR=/app/var
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY server ./server
# The backend imports shared modules (news parser, SEO metadata, club data) from src/.
COPY src/config ./src/config
COPY src/logic ./src/logic
COPY src/data ./src/data
RUN mkdir /app/var && chown node:node /app/var
USER node
EXPOSE 3001
CMD ["node", "server/index.ts"]
