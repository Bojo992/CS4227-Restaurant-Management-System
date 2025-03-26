package com.cs4337.inventory.commonModels.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AddInventoryItemRequest {

    public List<Integer> usedIn;
    public String name;
    public float price;
    public String currency;
}
