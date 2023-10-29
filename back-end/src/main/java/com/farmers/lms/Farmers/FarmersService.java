package com.farmers.lms.Farmers;


import com.farmers.lms.Courses.Courses;
import com.farmers.lms.Courses.CoursesRepo;
import com.farmers.lms.Farmers.dto.AssignCourses;
import com.farmers.lms.Farmers.dto.AssignCoursesRepository;
import com.farmers.lms.Farmers.dto.CourseAndFarmerDetails;
import com.farmers.lms.Farmers.dto.CourseAndFarmerDetailsRepo;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FarmersService {

    @Autowired
    FarmersRepository farmersRepository;

    @Autowired
    CourseAndFarmerDetailsRepo courseAndFarmerDetailsRepo;

    @Autowired
    CoursesRepo coursesRepo;

    @Autowired
     AssignCoursesRepository assignCoursesRepository;

    public void createFarmer(Farmers farmers) {
        farmersRepository.save(farmers);
    }

    public List<Farmers> getFarmersList(String farmerName, String location,Integer farmersid) {
        List<Farmers> assignedCoursesList = new ArrayList<Farmers>();
        farmersRepository.findAll(Specification.where(farmerNameEquals(farmerName)).and(locationEquals(location)).and(farmerIdEquals(farmersid)))
                .forEach(updated -> assignedCoursesList.add((Farmers) updated));
        return assignedCoursesList;
    }

    private Specification<Farmers> farmerIdEquals(final Integer farmerId) {
        return(root, query, builder) -> {
            if (farmerId != null) {
                return builder.equal(root.get("id"), farmerId);
            } else {
                return null;
            }
        };
    }

    private Specification<Farmers> farmerNameEquals(final String farmerName) {
        return StringUtils.isEmpty(farmerName) ? null
                : (root, query, builder) -> builder.equal(root.get("farmerName"), farmerName);
    }

    private Specification<Farmers> locationEquals(final String location) {
        return StringUtils.isEmpty(location) ? null
                : (root, query, builder) -> builder.equal(root.get("location"), location);
    }

    public void deleteFarmer(int id) {
        farmersRepository.deleteById(id);
    }
    public ResponseEntity<Object> updateFarmer(int id, Farmers farmer) {
        //check if employee exist in database
        Optional<Farmers> farmerObje = farmersRepository.findById(id);
        Farmers farmerDetails = farmerObje.get();
        if (farmerObje != null) {
            return new ResponseEntity<>(farmersRepository.save(farmerDetails), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    public void assignCourses(AssignCourses assignCourses) {
        assignCoursesRepository.save(assignCourses);
        Optional<Farmers> farmerDetails = farmersRepository.findById(assignCourses.getFarmerId());
        List<AssignCourses> assignedCoursesList = new ArrayList<AssignCourses>();
        CourseAndFarmerDetails courseAndFarmerDetailsObj = new CourseAndFarmerDetails();
        assignCoursesRepository.findAll(Specification.where(farmerIdEqualsFromAssignedCourses(assignCourses.getFarmerId())))
                .forEach(updated -> assignedCoursesList.add((AssignCourses) updated));
        assignedCoursesList.forEach((e->{
            Optional<Courses> courseobj = coursesRepo.findByCourseId(e.getCourseId());
            Courses courseDetails = courseobj.get();
            courseAndFarmerDetailsObj.setCourseDescription(courseDetails.getCourseDescription());
            courseAndFarmerDetailsObj.setCourseName(courseDetails.getCourseName());
            courseAndFarmerDetailsObj.setCourseId(courseDetails.getCourseId());
            courseAndFarmerDetailsObj.setFarmerAge(farmerDetails.get().getFarmerAge());
            courseAndFarmerDetailsObj.setFarmerName(farmerDetails.get().getFarmerName());
            courseAndFarmerDetailsObj.setFileName(courseDetails.getFileName());
            courseAndFarmerDetailsObj.setFilePath(courseDetails.getFilePath());
            courseAndFarmerDetailsObj.setLocation(farmerDetails.get().getLocation());
            courseAndFarmerDetailsObj.setFileSize(courseAndFarmerDetailsObj.getFileSize());
            courseAndFarmerDetailsObj.setPhoneNo(farmerDetails.get().getPhoneNo());
            courseAndFarmerDetailsObj.setUnitName(courseDetails.getUnitName());
            courseAndFarmerDetailsObj.setFarmerId(assignCourses.getFarmerId());
            courseAndFarmerDetailsObj.setUnitVideoLink(courseDetails.getUnitVideoLink());
            courseAndFarmerDetailsRepo.save(courseAndFarmerDetailsObj);
        }));

    }
    private Specification<AssignCourses> farmerIdEqualsFromAssignedCourses(final Integer farmerId) {
        return(root, query, builder) -> {
            if (farmerId != null) {
                return builder.equal(root.get("farmerId"), farmerId);
            } else {
                return null;
            }
        };
    }

    public List<CourseAndFarmerDetails> getAssignedCourses(Integer farmerId) {
        List<CourseAndFarmerDetails> assignedCoursesList = new ArrayList<CourseAndFarmerDetails>();
        courseAndFarmerDetailsRepo.findAll(Specification.where(farmerIdFromCourseAndFarmerDetails(farmerId)))
                .forEach(updated -> assignedCoursesList.add((CourseAndFarmerDetails) updated));
        return assignedCoursesList;
    }

    private Specification<CourseAndFarmerDetails> farmerIdFromCourseAndFarmerDetails(final Integer farmerId) {
        return(root, query, builder) -> {
            if (farmerId != null) {
                return builder.equal(root.get("farmerId"), farmerId);
            } else {
                return null;
            }
        };
    }



}
