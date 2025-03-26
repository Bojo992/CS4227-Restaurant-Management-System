
package com.cs4227.payment.persistence;

import com.cs4227.payment.commonModels.PaymentRequest;
import com.cs4227.payment.commonModels.TransactionCompletionResponse;
import com.cs4227.payment.commonModels.TransactionsHistory;
import com.cs4227.payment.dal.TransactionsRepository;
import com.cs4227.payment.dal.models.Transactions;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentService {
    private TransactionsRepository _transactionsRepository;

    public PaymentService(TransactionsRepository transactionsRepository) {
        this._transactionsRepository = transactionsRepository;
    }

    public TransactionsHistory getTransactionsHistory() {
        var transactionsHistory = TransactionsHistory.builder().transactions(_transactionsRepository.findAll()).build();

        return transactionsHistory;
    }

    public TransactionCompletionResponse makePayment(PaymentRequest request) {
        var response = new TransactionCompletionResponse();
        var transaction = Transactions.builder()
                .amount(request.getAmount())
                .currency(request.currency)
                .sender(request.sender)
                .receiver(request.receiver)
                .paymentId(UUID.randomUUID().toString())
                .build();

        try {
            _transactionsRepository.save(transaction);
        } catch (Exception exception) {
            response.setTransactionStatus("FAILED");

            return response;
        }

        response.setPaymentId(transaction.getPaymentId());
        response.setTransactionId(transaction.getId().toString());
        response.setTransactionStatus("SUCCESS");

        return response;
    }

    public TransactionsHistory getTransactionsHistory(int range, int lastIndex) {
        var response = TransactionsHistory.builder().build();
        try {
            response.setTransactions(_transactionsRepository.getInRange(lastIndex, lastIndex + range));
        } catch (Exception exception) {
            throw new RuntimeException(exception);
        }
        return response;
    }
}
