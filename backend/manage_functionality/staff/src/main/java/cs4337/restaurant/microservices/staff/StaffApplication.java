package cs4337.restaurant.microservices.staff;

import cs4337.restaurant.microservices.staff.entities.Staff;
import cs4337.restaurant.microservices.staff.repositories.StaffRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.sql.Connection;
import java.sql.DriverManager;

@SpringBootApplication
public class StaffApplication {

    public static void main(String[] args) {
        SpringApplication.run(StaffApplication.class, args);
    }

    @Bean
    public CommandLineRunner loadData(StaffRepository staffRepository) {
        return args -> {
            staffRepository.save(new Staff("John Doe", "LOW", "10", "40"));
            staffRepository.save(new Staff("Jacob Becker", "HIGH", "0.4", "20"));
        };
    }
}
