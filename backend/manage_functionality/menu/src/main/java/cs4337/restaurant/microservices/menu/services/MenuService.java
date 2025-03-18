package cs4337.restaurant.microservices.menu.services;

import cs4337.restaurant.microservices.menu.entities.MenuEntity;
import cs4337.restaurant.microservices.menu.repositories.MenuRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MenuService {
    private MenuRepository menuRepository;

    public List<MenuEntity> getAllMenu(){
        return this.menuRepository.findAll();
    }

    public void addNewMenu(MenuEntity menu){
        this.menuRepository.save(menu);
    }

    public void updateMenu(MenuEntity menu){
        this.menuRepository.save(menu);
    }

    public void deleteMenu(String name){
        this.menuRepository.deleteById(name);
    }
}
