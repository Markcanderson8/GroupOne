FROM openjdk:20-ea-4-jdk AS build
COPY . .
mvn clean package -DskipTests

FROM openjdk:20-jdk-slim
COPY --from=build /target/pizzaApi-0.0.1-SNAPSHOT.jar pizzaApi.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "pizzaApi.jar"]