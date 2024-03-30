package com.app.DTO;

import java.time.LocalDateTime;

public class ApiResponse {

	private String mesg;
	private LocalDateTime time_stamp;
	public ApiResponse(String mesg) {
		super();
		this.mesg = mesg;
		this.time_stamp = LocalDateTime.now();
	}

}
