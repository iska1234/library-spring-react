package com.cavero.springbootlibrarycavero.entity;


import java.util.Date;
import javax.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import lombok.Data;

@Entity
@Table(name = "review")
@Data
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "user_Email")
	private String userEmail;
	
	@Column(name = "date")
	@CreationTimestamp
	private Date date;
	
	@Column(name = "rating")
	private double rating;
	
	@Column(name = "book_id")
	private Long bookId;
	
	@Column(name = "review_description")
	private String reviewDescription;
		
	
}
