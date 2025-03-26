package com.cs4227.payment.business_layer;

import com.cs4227.payment.commonModels.PaymentRequest;
import com.cs4227.payment.commonModels.TransactionCompletionResponse;
import com.cs4227.payment.commonModels.TransactionsHistory;
import com.cs4227.payment.persistence.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PaymentController {
    private PaymentService _service;

    public PaymentController(PaymentService _service) {
        this._service = _service;
    }

    @GetMapping("/getTransactions")
    public TransactionsHistory getTransactionsHistory() {
        return _service.getTransactionsHistory();
    }

    @GetMapping("/getTransactionsInRange}")
    public TransactionsHistory getTransactionsHistory(@RequestHeader("range") int range, @RequestHeader("lastIndex") int lastIndex) {
        return _service.getTransactionsHistory(range, lastIndex);
    }

    @PostMapping("/pay")
    public TransactionCompletionResponse makePayment(@RequestBody PaymentRequest request) {
        return _service.makePayment(request);
    }
}
