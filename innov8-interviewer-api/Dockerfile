FROM maven:3.5.2-jdk-8-alpine
WORKDIR /build
COPY ./pom.xml ./
COPY ./src ./src/
RUN mvn package

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=0 ./build/target/USAAInterviewerApp-0.1.0.jar ./
ENTRYPOINT ["java", "-jar", "USAAInterviewerApp-0.1.0.jar"]