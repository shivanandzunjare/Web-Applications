package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.entities.Product;

public interface ProductService {

	
	List<Product> getAllProd();
	
	Product addProdDetails(Product transientProd);
	
	String delProduct( Long id);
	
	Product updateProduct( Product product);
	
	Optional<?> getById( Long id);


}
