package com.farmers.lms.Farmers;

import com.farmers.lms.Courses.Courses;
import com.farmers.lms.Farmers.dto.AssignCourses;
import com.farmers.lms.Farmers.dto.CourseAndFarmerDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FarmersController {
    @Autowired
    FarmersService farmersService;


    @PostMapping("/registerFarmer")
    private void CreateFarmer(@RequestBody Farmers farmer){
        farmersService.createFarmer(farmer);
    }

    @GetMapping("/getFarmers")
    private List<Farmers> getFarmersList( @RequestParam(required = false) String farmerName,@RequestParam(required = false) String location ,@RequestParam(required = false) Integer farmerId){
        return farmersService.getFarmersList(farmerName,location,farmerId);
    }

    @DeleteMapping("deleteFarmer/{id}")
    private void deleteFarmer(@PathVariable int id){
        farmersService.deleteFarmer(id);
    }

    @PutMapping("updateFarmerDetails/{id}")
    private ResponseEntity<Object> updateFarmer(@PathVariable int id, @RequestBody Farmers farmer){
        return farmersService.updateFarmer(id,farmer);
    }

    @PostMapping("/assignCourses")
    private void assignCourses(@RequestBody AssignCourses assignCourses){
        farmersService.assignCourses(assignCourses);
    }

    @GetMapping("/getAssignedCourses/{id}")
    private List<CourseAndFarmerDetails> getAssignedCourses(@PathVariable("id") Integer farmerId){
        return farmersService.getAssignedCourses(farmerId);
    }

}
