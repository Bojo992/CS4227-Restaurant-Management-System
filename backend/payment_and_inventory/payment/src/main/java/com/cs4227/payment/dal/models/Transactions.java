package com.cs4227.payment.dal.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Integer id;

    @Column
    private String paymentId;

    @Column
    private float amount;

    @Column
    private String currency;

    @Column
    private String sender;

    @Column
    private String receiver;
}
