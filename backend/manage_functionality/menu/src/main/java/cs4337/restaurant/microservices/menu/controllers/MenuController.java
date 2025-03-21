package cs4337.restaurant.microservices.menu.controllers;

import cs4337.restaurant.microservices.menu.entities.MenuEntity;
import cs4337.restaurant.microservices.menu.services.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController("/menu")
public class MenuController {
    private MenuService menuService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAllMenu(){
        return ResponseEntity.ok(this.menuService.getAllMenu());
    }

    @GetMapping("/add")
    public ResponseEntity<Object> addMenu(@RequestBody MenuEntity menu){
        this.menuService.addNewMenu(menu);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/update")
    public ResponseEntity<Object> updateMenu(@RequestBody MenuEntity menu){
        this.menuService.updateMenu(menu);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/delete")
    public ResponseEntity<Object> deleteMenu(@RequestBody String name){
        this.menuService.deleteMenu(name);
        return ResponseEntity.ok().build();
    }
}
