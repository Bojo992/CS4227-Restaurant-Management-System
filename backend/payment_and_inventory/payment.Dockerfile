FROM openjdk:17-jdk-slim as payment_app
COPY payment/target/payment-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
