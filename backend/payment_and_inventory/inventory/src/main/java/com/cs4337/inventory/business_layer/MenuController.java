package com.cs4337.inventory.business_layer;

import com.cs4337.inventory.dal.models.Menu;
import com.cs4337.inventory.persistence.MenuService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class MenuController {
    private MenuService _service;

    public MenuController(MenuService _service) {
        this._service = _service;
    }

    @GetMapping("/getMenu")
    public List<Menu> getMapping(@RequestParam int ingredientId) {
        return _service.getMenuItems(ingredientId);
    }

    @PostMapping("/addMenuItem")
    public String addMenuItem(@RequestParam String name) {
        return _service.addMenuItem(name);
    }

    @DeleteMapping("/deleteMenuItem")
    public String deleteMenuItem(@RequestParam int id) {
        return _service.deleteMenuItem(id);
    }
}
