package com.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

import com.app.entities.Product;
import com.app.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins ="*")
public class Productcontroller {

	@Autowired
	private ProductService prodService;
	public Productcontroller() {
		
		// TODO Auto-generated constructor stub
	System.out.println(" in product controller "+ getClass());
	
	}
	//get  all product list 
	@GetMapping("/getList")
	public List<Product> listProd() {
		System.out.println("in list emps");
		return prodService.getAllProd();
	}
    //add product to database
	@PostMapping("/addProduct")
	public ResponseEntity<?> saveProdDetails(@RequestBody Product transientProd) {
		System.out.println(" in save " +transientProd );
		
		return new ResponseEntity<>( prodService.addProdDetails(transientProd), HttpStatus.CREATED);
	}
	
	//delete the product by id
	@DeleteMapping("/del/{id}")
	public ResponseEntity<?> delById(@PathVariable Long id){
		return new ResponseEntity<>(prodService.delProduct(id), HttpStatus.OK);
	}
	
	//update the product
	@PutMapping("/update")
	public Product updateProdDetails( @RequestBody Product product) {
		return prodService.updateProduct(product);
	}
	
	//fetch the data by id
	@GetMapping("/getById/{id}")
	public Optional<?> getProductById(@PathVariable Long id) {
		return prodService.getById(id);
		
	}
}
