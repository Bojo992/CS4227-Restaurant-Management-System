FROM openjdk:17-jdk-slim as analytics_app
COPY analytics/target/analytics-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
