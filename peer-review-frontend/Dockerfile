# Build step
FROM node:22 AS builder

WORKDIR /app
COPY package*.json tsconfig*.json index.html tailwind.config.js vite.config.ts ./
RUN npm install
COPY . .
RUN npm run build

# Serve step
FROM nginx:alpine

# Salin hasil build ke folder public nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Jalankan nginx
CMD ["nginx", "-g", "daemon off;"]
