package com.app.service;

import java.util.List;


import com.app.entities.Course;

public interface CourseService {

	List<Course> getAllCourse();
	
	Course getCourseById( Long id);
	
	Course addCourseDetails( Course transientCourse);
	
	Course updateCourse(Course detachedCourse);
	
	String deleteCourse(Long id );

	
}
