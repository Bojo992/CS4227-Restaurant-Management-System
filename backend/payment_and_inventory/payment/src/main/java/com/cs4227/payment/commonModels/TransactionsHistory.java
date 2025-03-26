package com.cs4227.payment.commonModels;

import com.cs4227.payment.dal.models.Transactions;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TransactionsHistory {
    public List<Transactions> transactions;
}
