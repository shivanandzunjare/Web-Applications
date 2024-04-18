package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entities.Product;
import com.app.repo.ProductRepository;

@Service
@jakarta.transaction.Transactional
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository prodRepo;

	
	@Override
	public List<Product> getAllProd() {
		// TODO Auto-generated method stub
		return prodRepo.findAll();
	}
	
	@Override
	public Product addProdDetails(Product transientProd) {
		return prodRepo.save(transientProd);
	}

	@Override
	public String delProduct(Long id) {
		String mesg =" invalid product id";
		 if(prodRepo.existsById(id)) 
			 prodRepo.deleteById(id);
		 mesg = "product with "+ id+ " is deleted";
		return mesg;
	}

	@Override
	public Product updateProduct(Product product) {
		
		return prodRepo.save(product);
	}

	@Override
	public Optional<?> getById(Long id) {
		// TODO Auto-generated method stub
		return prodRepo.findById(id);
	}
}
