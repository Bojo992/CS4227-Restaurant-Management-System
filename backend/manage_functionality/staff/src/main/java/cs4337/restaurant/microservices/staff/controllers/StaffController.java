package cs4337.restaurant.microservices.staff.controllers;

import cs4337.restaurant.microservices.staff.StaffDTO;
import cs4337.restaurant.microservices.staff.entities.Staff;
import cs4337.restaurant.microservices.staff.services.StaffService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/staff")
public class StaffController {
    private final StaffService staffService;

    public StaffController(StaffService staffService){
        this.staffService = staffService;
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllStaff(){
        return ResponseEntity.ok(this.staffService.getAllStaff());
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addStaff(@RequestBody StaffDTO staff){
        return ResponseEntity.ok(this.staffService.addNewStaff(staff));
    }

    @PostMapping("/update")
    public ResponseEntity<Object> updateStaff(@RequestBody StaffDTO staff){
        return ResponseEntity.ok(this.staffService.updateStaff(staff));
    }

    @PostMapping("/delete")
    public ResponseEntity<Object> deleteStaff(@RequestBody StaffDTO staff){
        this.staffService.deleteStaff(staff);
        return ResponseEntity.ok().build();
    }
}
