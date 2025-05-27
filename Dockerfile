# Use official Nginx image as base
FROM nginx:alpine
# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*
# Copy built Angular app to nginx public folder
COPY ./dist/angular_practice /usr/share/nginx/html
# Copy custom nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]