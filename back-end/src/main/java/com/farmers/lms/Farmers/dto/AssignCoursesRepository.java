package com.farmers.lms.Farmers.dto;

import com.farmers.lms.Farmers.Farmers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AssignCoursesRepository extends JpaRepository<AssignCourses, Integer>, JpaSpecificationExecutor<AssignCourses> {
}
