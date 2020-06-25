package com.ibm.training;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponseBody
public class Controller {
	@Autowired
	Repo r;
	
	@GetMapping("/getStudent")
	Iterable<Student> getStudentInfo()
	{
		return r.findAll();
	}
	
	@PostMapping("/postStudent")
	void insert(@RequestBody Student s)
	{
		r.save(s);
	}
}
