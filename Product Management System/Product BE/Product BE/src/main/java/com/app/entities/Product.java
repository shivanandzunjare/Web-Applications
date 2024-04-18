package com.app.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name=" product")
public class Product extends BaseEntity {


	
	@Column(name="productname", unique = true, nullable = false)
	private	String productname;
	
	@Column(name="quantity" , nullable = false)
	private int quantity;
	
	@Column(name="price ", nullable = false)
	private int price;
	
	@Column(name="description", nullable = false)
	private String description;


}
