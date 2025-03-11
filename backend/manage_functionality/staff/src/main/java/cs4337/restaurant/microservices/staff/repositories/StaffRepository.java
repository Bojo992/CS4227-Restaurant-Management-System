package cs4337.restaurant.microservices.staff.repositories;

import cs4337.restaurant.microservices.staff.entities.Staff;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StaffRepository extends JpaRepository<Staff, Long>{
    @Transactional
    void deleteByName(String name);
}
