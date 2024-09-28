FROM node:18-alpine
WORKDIR /bathtub
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
