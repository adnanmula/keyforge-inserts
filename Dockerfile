FROM node:13

RUN echo "deb http://archive.debian.org/debian stretch main" > /etc/apt/sources.list && \
    echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list

RUN dpkg --add-architecture i386 && \
    apt-get -o Acquire::Check-Valid-Until=false update && \
    apt-get install -y wine wine32 wine64 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app
EXPOSE 4200

CMD ["npm", "start"]
