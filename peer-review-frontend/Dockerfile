FROM node:22 AS builder

WORKDIR /app
COPY package*.json tsconfig*.json index.html tailwind.config.js vite.config.ts ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
