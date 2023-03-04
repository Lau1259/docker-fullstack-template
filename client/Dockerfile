FROM node:19-alpine
# create a directory in your docker image
WORKDIR /app

# install dependencies
COPY ./package.json ./

# run npm install. you just need the runtime dependencies here
RUN npm i

# Copy the rest of the code
COPY ./ ./

# Expose the port, on which your application is running
EXPOSE 3000

# Run the code
CMD [ "npm","run","dev" ]