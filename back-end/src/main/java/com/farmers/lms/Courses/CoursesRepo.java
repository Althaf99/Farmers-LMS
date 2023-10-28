package com.farmers.lms.Courses;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface CoursesRepo extends JpaRepository<Courses,Integer>, JpaSpecificationExecutor<Courses> {
    Optional<Courses> findByCourseId(String courseId);
}
