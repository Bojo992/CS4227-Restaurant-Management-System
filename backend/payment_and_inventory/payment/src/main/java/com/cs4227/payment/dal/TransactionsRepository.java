package com.cs4227.payment.dal;

import com.cs4227.payment.dal.models.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionsRepository extends JpaRepository<Transactions, Integer> {
    @Query(value = "SELECT * FROM transaction as R WHERE R.id >= :start and R.id <= :end", nativeQuery = true)
    List<Transactions> getInRange(@Param("start") Integer start, @Param("end") Integer end);
}
