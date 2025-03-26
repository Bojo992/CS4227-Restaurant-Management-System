package com.cs4337.inventory.dal;

import com.cs4337.inventory.dal.models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer> {
    @Query(value = "SELECT * FROM inventory as Inv WHERE Inv.id >= :start and Inv.id <= :end", nativeQuery = true)
    List<Inventory> getInRange(@Param("start") Integer start, @Param("end") Integer end);

    @Query(value = "DELETE FROM inventory WHERE id = :id AND usedIn = :menuId", nativeQuery = true)
    void deleteUsedInById(@Param("id") int ingredientId, @Param("menuId") int menuItemId);
}
