FROM node:10-slim

# File Author / Maintainer
MAINTAINER Snyk Ltd

# ENV and user settings
#######################
ENV HOME /home/node
ENV NODE_ENV production
RUN yes | adduser -h $HOME -D -S node

# Copy the app and config
#########################
ADD . $HOME

# Switch user to complete npm postinstall hook
##############################################
RUN chown -R node $HOME
USER node

# Prepare and complete `npm install`
####################################
RUN cd ~ && npm install --production;

# Start the server
#######################
CMD  cd ~ && npm start
