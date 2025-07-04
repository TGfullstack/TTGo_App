# Use official Node.js image
FROM node:19

# Set working directory
WORKDIR /app

# Copy files and install dependencies
COPY package*.json package-lock.json ./
RUN npm install

# Copy remaining app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
