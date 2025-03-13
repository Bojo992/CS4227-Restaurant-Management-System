package cs4337.restaurant.microservices.tables.controllers;

import cs4337.restaurant.microservices.tables.entities.TableEntity;
import cs4337.restaurant.microservices.tables.services.TableService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController("/tables")
public class TableControllers {
    private TableService tableService;

    @GetMapping("/all")
    public ResponseEntity<Object> getAllStaff(){
        return ResponseEntity.ok(this.tableService.getAllTable());
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addStaff(@RequestBody TableEntity table){
        this.tableService.addNewTable(table);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/update")
    public ResponseEntity<Object> updateStaff(@RequestBody TableEntity table){
        this.tableService.updateTable(table);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/delete")
    public ResponseEntity<Object> deleteStaff(@RequestBody TableEntity table){
        this.tableService.deleteTable(table);
        return ResponseEntity.ok().build();
    }
}
