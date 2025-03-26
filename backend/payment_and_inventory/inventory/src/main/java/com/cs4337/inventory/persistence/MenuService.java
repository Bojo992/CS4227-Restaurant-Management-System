package com.cs4337.inventory.persistence;

import com.cs4337.inventory.dal.MenuRepository;
import com.cs4337.inventory.dal.models.Menu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    private MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> getMenuItems(int ingredientId) {
        try {
            return menuRepository.findByIngredientId(ingredientId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public String addMenuItem(String name) {
        try {
            menuRepository.save(Menu.builder().name(name).build());
        } catch (Exception e) {
            return e.getMessage();
        }
        return "SUCCESS";
    }

    public String deleteMenuItem(int id) {
        try {
            menuRepository.deleteByIdEveryWhere(id);
        } catch (Exception e) {
            return e.getMessage();
        }
        return "SUCCESS";
    }
}
