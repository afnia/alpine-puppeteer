
FROM zenika/alpine-chrome:with-node

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD 1
ENV PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser

USER root
WORKDIR /home
COPY . /home

COPY --chown=chrome package.json ./
COPY --chown=chrome . ./
RUN npm install

#CMD ["node", "/home/a.js"]