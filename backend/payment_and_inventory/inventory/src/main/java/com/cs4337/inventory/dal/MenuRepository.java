package com.cs4337.inventory.dal;

import com.cs4337.inventory.dal.models.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {
    @Query(value = "SELECT * FROM menu M WHERE M.id IN :ids", nativeQuery = true)
    List<Menu> getFromList(@Param("ids") Collection<Integer> ids);

    @Query(value = "DELETE FROM menu WHERE id = :id; DELETE FROM inventory WHERE usedIn = :id;", nativeQuery = true)
    void deleteByIdEveryWhere(@Param("id") int id);

    @Query(value = "SELECT * FROM menu WHERE id IN (SELECT usedIn FROM ingredient WHERE usedIn = :ingredientId)", nativeQuery = true)
    List<Menu> findByIngredientId(@Param("ingredientId") int ingredientId);
}
