package com.app.controller;

import java.util.List;

import com.app.controller.WebConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.DTO.ApiResponse;
import com.app.DTO.RequestDTo;
import com.app.DTO.ResponseDTO;
import com.app.entities.Course;
import com.app.service.CourseService;

@RestController
@RequestMapping("/api")
@CrossOrigin( origins ="*")
public class CourseController {

	@Autowired
	private CourseService courseService;
	public CourseController() {
		System.out.println(" in def cntor " + getClass());
	}

	@GetMapping("/getlist")
	public List<Course> listCourse(){
		return  courseService.getAllCourse();
	}
	
	@GetMapping("/get/{id}")
	public Course getCourseById( @PathVariable Long  id) {
		return courseService.getCourseById(id);
	}
	
	@PostMapping("/add")
	ResponseEntity<?> saveCourseDetails( @RequestBody Course transientCourse){
		return new ResponseEntity<>( courseService.addCourseDetails(transientCourse), HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public Course updateCourseDetails( @RequestBody Course detachedCourse) {
		return courseService.updateCourse(detachedCourse);
	}
	
	@GetMapping("/del/{id}")
	public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
		return new ResponseEntity<>  (courseService.deleteCourse(id), HttpStatus.OK);	
	}
}
