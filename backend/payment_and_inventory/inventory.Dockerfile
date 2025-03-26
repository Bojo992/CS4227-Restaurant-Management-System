FROM openjdk:17-jdk-slim as inventory_app
COPY inventory/target/inventory-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
