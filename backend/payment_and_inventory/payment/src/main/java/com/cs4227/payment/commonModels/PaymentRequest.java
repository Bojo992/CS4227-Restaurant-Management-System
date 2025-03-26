package com.cs4227.payment.commonModels;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentRequest {
    public float  amount;
    public String currency;
    public String sender;
    public String receiver;
}
