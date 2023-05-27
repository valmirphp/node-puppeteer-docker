FROM valmirphp/node-puppeteer:latest

WORKDIR /home/pptruser/app

USER pptruser

#ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
#    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]


