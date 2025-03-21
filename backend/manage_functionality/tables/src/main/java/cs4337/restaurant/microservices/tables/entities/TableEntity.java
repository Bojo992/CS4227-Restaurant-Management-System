package cs4337.restaurant.microservices.tables.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tables")
public class TableEntity {
    @Id
    private Long id;
    private Double x;
    private Double y;
}
