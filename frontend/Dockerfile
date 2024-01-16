# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install build tools (including make)
RUN apk add --no-cache make gcc g++ python3

# Set Python 3 as the default python interpreter
RUN ln -sf python3 /usr/bin/python

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build your React app (replace this with your specific build command)
RUN npm run build

# Expose the necessary port (if your app runs on a specific port)
EXPOSE 3000

# Start the application (replace this with your specific start command)
CMD ["npm", "start"]
