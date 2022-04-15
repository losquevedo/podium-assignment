# Repo for Cypress Browsers Images:
# https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/base:12

COPY package.json package.json
RUN npm i 
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

CMD ["npx", "cypress", "run"]
