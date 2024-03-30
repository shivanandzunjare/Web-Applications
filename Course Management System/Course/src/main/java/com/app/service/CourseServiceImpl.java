package com.app.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.entities.Course;
import com.app.repo.CourseRepository;

@Service
@org.springframework.transaction.annotation.Transactional
public class CourseServiceImpl implements CourseService {

	
	@Autowired
	private CourseRepository courseRepo;
	
	@Override
	public List<Course> getAllCourse() {
		
		return courseRepo.findAll();
	}

	@Override
	public Course addCourseDetails(Course transientCourse) {
		
		return courseRepo.save(transientCourse);
	}

	@Override
	public Course updateCourse(Course detachedCourse) {
		
		return courseRepo.save(detachedCourse);
	}

	@Override
	public String deleteCourse(Long id) {
		String mesg=" invalid id ";
		if(courseRepo.existsById(id))
			courseRepo.deleteById(id);
		mesg= " course  "+id +  " deleted"; 
		return mesg;
	}

	@Override
	public Course getCourseById(Long id) {
		return 	courseRepo.findById(id).orElseThrow(() -> new  ResourceNotFoundException(" Invalid Id"));
	
	}
	
	}
