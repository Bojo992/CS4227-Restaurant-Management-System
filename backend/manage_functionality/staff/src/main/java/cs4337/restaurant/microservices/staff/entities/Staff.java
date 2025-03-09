package cs4337.restaurant.microservices.staff.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "staff")
@AllArgsConstructor
@Getter
@Setter
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String role;
    private String rate;
    private String hours;

    public Staff(String name, String role, String rate, String hours){
        this.name = name;
        this.role = role;
        this.rate = rate;
        this.hours = hours;
    }

    public Staff(){

    }


    public void setName(String name) {
        this.name = name;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getName() {
        return name;
    }

    public String getRole() {
        return role;
    }

    public String getRate() {
        return rate;
    }

    public String getHours() {
        return hours;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
