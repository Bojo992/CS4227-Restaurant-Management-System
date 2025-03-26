package com.cs4227.payment.commonModels;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionCompletionResponse {
    private String transactionId;
    private String transactionStatus;
    private String paymentId;
}
