FROM node:lts AS builder

WORKDIR /app

COPY . ./

RUN yarn install --frozen-lockfile

RUN yarn build

FROM nginx:alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
