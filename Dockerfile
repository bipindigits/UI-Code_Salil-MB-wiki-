
#FROM node:8


#RUN npm install && npm install -g @dojo/cli
#COPY . /output
#RUN cd /output


#RUN dojo build



#EXPOSE  9999

#CMD ["node", "/src/main.ts"]



FROM node:8
WORKDIR /src
ADD . /src
COPY . /src
RUN npm install
#RUN npm audit fix
EXPOSE 80
#CMD ["dojo", "build", "--mode", "dev", "--serve", "--port", "80"]
CMD ["npm", "start"] 
# CMD ["ng", "build", "--", "--prod"]
# CMD ["npm", "run", "build", "--", "--port", "80"]
#CMD dojo build app --feature baseUrl=$baseUrl --mode dev --serve --port 80
