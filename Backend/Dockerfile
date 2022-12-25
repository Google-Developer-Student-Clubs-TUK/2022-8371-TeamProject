# From openjdk:11
# #ARG JAR_FILE=build/libs/*.JAR_FILE
# ARG JAR_FILE=/Backend/build/libs/be8371-0.0.1-SNAPSHOT.jar
# COPY ${JAR_FILE} be8371-0.0.1-SNAPSHOT.jar
# #ENTRYPOINT ["java","-jar","/be8371-0.0.1-SNAPSHOT.jar"]

FROM openjdk:11-jdk
VOLUME /tmp
EXPOSE 8080 8080
ARG JAR_FILE=/build/libs/be8371-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} batch.jar
# 실행 명령
ENTRYPOINT ["java","-Dspring.profiles.active=env", "-Djava.security.egd", "-Xdebug","-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005","-jar","/batch.jar"]