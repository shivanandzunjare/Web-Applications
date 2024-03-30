package com.app.controller;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomePageController {

	public HomePageController() {
		System.out.println(" in home page controller" +getClass());
	}

	@GetMapping("/")
	public String getTime() {
		
		return ("@@@@@@@@@@@@@@@@@  time_stamp"+ LocalDateTime.now());

	}
}