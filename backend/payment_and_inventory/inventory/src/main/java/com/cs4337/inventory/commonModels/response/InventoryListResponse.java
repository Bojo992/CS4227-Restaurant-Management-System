package com.cs4337.inventory.commonModels.response;

import com.cs4337.inventory.dal.models.Inventory;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InventoryListResponse {
   public List<Inventory> inventoryList;
}
