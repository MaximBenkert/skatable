FROM openjdk:17

ENV ENVIRONMENT=prod

LABEL maintainer=max.benkert@posteo.de

EXPOSE 8080

ADD backend/target/app.jar app.jar

CMD [ "sh", "-c", "java -jar /app.jar" ]