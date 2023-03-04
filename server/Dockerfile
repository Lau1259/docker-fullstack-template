FROM node:19-alpine
# create a directory in your docker image
WORKDIR /app

# install dependencies
COPY ./package.json ./

# run npm install. you just need the runtime dependencies here
RUN npm i

# Copy the rest of the code
COPY ./ ./

# Build project
RUN npm run build

# Expose the port, on which your application is running
EXPOSE 8080

# Run the code
CMD [ "npm","start" ]