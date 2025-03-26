package com.cs4337.inventory.persistence;

import com.cs4337.inventory.commonModels.requests.AddInventoryItemRequest;
import com.cs4337.inventory.commonModels.response.InventoryListResponse;
import com.cs4337.inventory.dal.InventoryRepository;
import com.cs4337.inventory.dal.models.Inventory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class InventoryService {
    private InventoryRepository inventoryRepository;

    public InventoryService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public InventoryListResponse getAllInventory() {
        var response = InventoryListResponse.builder().inventoryList(inventoryRepository.findAll()).build();
        return response;
    }

    public InventoryListResponse getInRange(int lastIndex, int range) {
        var response = InventoryListResponse.builder().inventoryList(inventoryRepository.getInRange(lastIndex, range)).build();
        return response;
    }

    public void addIngredient(AddInventoryItemRequest inventory) {
        var ingredientBuilder = Inventory.builder()
                .uuid(UUID.randomUUID().toString())
                .name(inventory.name)
                .price(inventory.price)
                .currency(inventory.currency);

        if (inventory.usedIn != null || !inventory.usedIn.isEmpty()) {
            for (var usedIn : inventory.usedIn) {
                inventoryRepository.save(ingredientBuilder.usedIn(usedIn).build());
            }

            return;
        }

        inventoryRepository.save(ingredientBuilder.build());
    }

    public ResponseEntity<Void> addIngredientToMenuItem(Integer ingredientId, Integer menuItemId) {
        var temp = inventoryRepository.getReferenceById(ingredientId);

        var ingredient = Inventory.builder()
                .id(temp.getId())
                .name(temp.getName())
                .price(temp.getPrice())
                .usedIn(menuItemId)
                .currency(temp.getCurrency())
                .stock(temp.getStock())
                .uuid(UUID.randomUUID().toString())
                .build();

        inventoryRepository.save(ingredient);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Void> deleteIngredientFromMenuItem(int ingredientId, int menuItemId) {
        inventoryRepository.deleteUsedInById(ingredientId, menuItemId);

        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Void> deleteIngredient(int index) {
        inventoryRepository.deleteById(index);

        return ResponseEntity.ok().build();
    }
}
