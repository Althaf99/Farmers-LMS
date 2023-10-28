package com.farmers.lms.Farmers.dto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CourseAndFarmerDetailsRepo extends JpaRepository<CourseAndFarmerDetails, Integer>, JpaSpecificationExecutor<CourseAndFarmerDetails> {
}
