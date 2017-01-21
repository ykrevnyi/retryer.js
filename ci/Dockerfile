FROM ykrevnyi/retryerjs-base:1.0.1

# ENV service=retryer
# ENV appPath=/home/app

# Install modules
RUN npm install -q

# Add all the code
COPY . .

# Set default command
CMD ['npm', 'start']
