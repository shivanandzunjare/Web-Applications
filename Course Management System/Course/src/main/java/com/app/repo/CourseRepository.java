package com.app.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Course;

public interface CourseRepository  extends JpaRepository<Course, Long>{

	Optional<Course> getByName(String nm);

}
