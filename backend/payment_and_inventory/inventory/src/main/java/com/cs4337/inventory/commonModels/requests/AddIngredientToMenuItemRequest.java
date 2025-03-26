package com.cs4337.inventory.commonModels.requests;

import lombok.*;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AddIngredientToMenuItemRequest {
    public Integer menuId;
    public Integer ingredientId;
}
