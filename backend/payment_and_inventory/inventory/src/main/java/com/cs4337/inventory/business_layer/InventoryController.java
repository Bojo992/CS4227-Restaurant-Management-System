package com.cs4337.inventory.business_layer;

import com.cs4337.inventory.commonModels.requests.AddIngredientToMenuItemRequest;
import com.cs4337.inventory.commonModels.requests.AddInventoryItemRequest;
import com.cs4337.inventory.commonModels.response.InventoryListResponse;
import com.cs4337.inventory.persistence.InventoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class InventoryController {
    private InventoryService _inventoryService;

    public InventoryController(InventoryService _inventoryService) {
        this._inventoryService = _inventoryService;
    }

    @GetMapping("/getAllInventory")
    public InventoryListResponse getAllInventory() {
        return _inventoryService.getAllInventory();
    }

    @GetMapping("/getInventoryInRange")
    public InventoryListResponse getAllInventory(@RequestParam("lastIndex") int lastIndex, @RequestParam("range") int range) {
        return _inventoryService.getInRange(lastIndex, range);
    }

    @PostMapping("/addIngridient")
    public ResponseEntity<Void> addIngredient(@RequestBody AddInventoryItemRequest inventory) {
        try{
            _inventoryService.addIngredient(inventory);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok().build();
    }

    @PostMapping("/addIngredientToMenuItem")
    public ResponseEntity<Void> addIngredientToMenuItem(@RequestBody AddIngredientToMenuItemRequest req) {
        try {
            return _inventoryService.addIngredientToMenuItem(req.ingredientId, req.menuId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/deleteIngredientFromMenuItem")
    public ResponseEntity<Void> deleteIngredientFromMenuItem(@RequestParam("ingredient") int ingredientId, @RequestParam("menuItemId") int menuItemId) {
        try {
            return _inventoryService.deleteIngredientFromMenuItem(ingredientId, menuItemId);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/deleteIngredient")
    public ResponseEntity<Void> deleteIngredient(@RequestParam("index") int index) {
        try {
            return _inventoryService.deleteIngredient(index);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
