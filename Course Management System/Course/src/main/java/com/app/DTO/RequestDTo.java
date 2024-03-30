package com.app.DTO;

import org.hibernate.validator.constraints.NotBlank;

public class RequestDTo {

	@jakarta.validation.constraints.NotBlank
	private String name;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
