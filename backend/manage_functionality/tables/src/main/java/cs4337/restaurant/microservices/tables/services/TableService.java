package cs4337.restaurant.microservices.tables.services;

import cs4337.restaurant.microservices.tables.entities.TableEntity;
import cs4337.restaurant.microservices.tables.repositories.TableRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TableService {
    private TableRepository tablesRepository;

    public List<TableEntity> getAllTable(){
        return this.tablesRepository.findAll();
    }

    public void addNewTable(TableEntity table){
        this.tablesRepository.save(table);
    }

    public void updateTable(TableEntity table){
        this.tablesRepository.save(table);
    }

    public void deleteTable(TableEntity table){
        this.tablesRepository.delete(table);
    }
}
