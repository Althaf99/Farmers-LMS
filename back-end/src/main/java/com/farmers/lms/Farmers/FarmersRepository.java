package com.farmers.lms.Farmers;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface FarmersRepository extends JpaRepository<Farmers, Integer>, JpaSpecificationExecutor<Farmers> {
}
