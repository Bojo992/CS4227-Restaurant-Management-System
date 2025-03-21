package cs4337.restaurant.microservices.menu.repositories;

import cs4337.restaurant.microservices.menu.entities.MenuEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<MenuEntity, String> {
}
