FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install -g bun
RUN bun install

COPY . .
RUN bunx prisma generate

CMD [ "bun", "run", "dev" ]