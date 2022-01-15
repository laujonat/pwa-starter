FROM node:buster as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80