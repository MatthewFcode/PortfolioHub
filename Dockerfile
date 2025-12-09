# FROM node:20-alpine as BUILDER
# WORKDIR /app

# COPY ["package.json", "package-lock.json*", "./"]
# RUN npm ci

# COPY . .

# ENV NODE_ENV=production
# RUN npm run build

# FROM nginx:stable-alpine
# WORKDIR /app

# COPY --from=BUILDER /app/dist /app/www
# COPY nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
