package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@jakarta.persistence.Entity

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Table(name=" course")
public class Course extends BaseEntity
{
//nm category   start date end date fee updatwe datetime
	
	@Column(name=" name" , nullable = false, unique = true)
	private String name;
	
	@Column(name="category")
	@Enumerated(EnumType.STRING)
	private Category category;
	

	@Column( name = " Course Fees", nullable = false)
	private double fees;
	
	@Column(name = " location" )
	private String location;
	
}
