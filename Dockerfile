# #Stage 1
# FROM node
# WORKDIR /app
# COPY package*.json ./
# COPY . .
# RUN npm install
# RUN npm run build --prod

# #Stage 2
# FROM nginx:alpine
# COPY --from=node /app/dist/ecd-angular /usr/share/nginx/html