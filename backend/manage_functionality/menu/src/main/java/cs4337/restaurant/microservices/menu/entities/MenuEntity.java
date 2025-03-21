package cs4337.restaurant.microservices.menu.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "menu")
@Data
public class MenuEntity {
    @Id
    private String name;

    private String img;
    private Float price;
    private Float cost;
    private Integer quantity;
}
