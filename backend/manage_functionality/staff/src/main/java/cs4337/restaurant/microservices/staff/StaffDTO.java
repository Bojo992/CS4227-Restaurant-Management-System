package cs4337.restaurant.microservices.staff;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StaffDTO {
    String name;
    String rate;
    String hours;
    String role;
    String id;

    public StaffDTO(String name, String rate, String hours, String role){
        this.name = name;
        this.rate = rate;
        this.hours = hours;
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public String getRate() {
        return rate;
    }

    public String getHours() {
        return hours;
    }

    public String getRole() {
        return role;
    }

    public String getId() {
        return id;
    }

}
