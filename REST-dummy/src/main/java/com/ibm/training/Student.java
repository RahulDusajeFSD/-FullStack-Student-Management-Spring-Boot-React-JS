package com.ibm.training;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {

	 String name;
	 
	 @Id
	 Integer age;
	 
	 
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Student(String name, Integer age) {
		
		this.name = name;
		this.age = age;
	}
	public Student() {
		
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + "]";
	}
	
	
}
