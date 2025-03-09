package cs4337.restaurant.microservices.staff.services;

import cs4337.restaurant.microservices.staff.StaffDTO;
import cs4337.restaurant.microservices.staff.entities.Staff;
import cs4337.restaurant.microservices.staff.repositories.StaffRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    private final StaffRepository staffRepository;

    public StaffService(StaffRepository staffRepository){
        this.staffRepository = staffRepository;
    }

    public List<Staff> getAllStaff(){
        return this.staffRepository.findAll();
    }

    public Staff addNewStaff(StaffDTO staff){
        Staff staffToAdd = new Staff();
        staffToAdd.setHours(staff.getHours());
        staffToAdd.setRate(staff.getRate());
        staffToAdd.setRole(staff.getRole());
        return this.staffRepository.save(staffToAdd);
    }

    public void deleteStaff(StaffDTO staff){
        this.staffRepository.deleteById(Long.valueOf(staff.getId()));
    }

    public Staff updateStaff(StaffDTO staff){
        Staff staffToUpdate = this.staffRepository.findById(Long.valueOf(staff.getId())).get();
        staffToUpdate.setHours(staff.getHours());
        staffToUpdate.setRate(staff.getRate());
        staffToUpdate.setRole(staff.getRole());
        return this.staffRepository.save(staffToUpdate);
    }
}

