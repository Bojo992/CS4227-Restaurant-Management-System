package cs4337.restaurant.microservices.tables.repositories;

import cs4337.restaurant.microservices.tables.entities.TableEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TableRepository extends JpaRepository<TableEntity, Long> {
}
