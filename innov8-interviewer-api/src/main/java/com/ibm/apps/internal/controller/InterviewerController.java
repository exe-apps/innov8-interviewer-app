package com.ibm.apps.internal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.apps.internal.model.Interviewer;
import com.ibm.apps.internal.service.InterviewerService;

@RestController
@RequestMapping("/v1/interviewer")
public class InterviewerController {

	@Autowired
	private InterviewerService interviewerService;

	@GetMapping
	public List<Interviewer> getAllInterviewers(@RequestParam("skill") Optional<String> skill) {
		
		if(skill.isPresent()) {
			return interviewerService.getInterviewerBySkill(skill.get());
		} else {
			return interviewerService.getAllInterviewers();
		}
	}

	@GetMapping("/{intId}")
	public Interviewer getInterviewerById(@PathVariable(value = "intId") Long intId) {
		return interviewerService.getInterviewerById(intId);
	}
	
	@PostMapping
	public Interviewer addInterviewer(@RequestBody Interviewer newInterviewer) {
		return interviewerService.addInterviewer(newInterviewer);
	}
	
	@PutMapping("/{intId}")
	public Interviewer updateInterviewer(@PathVariable(value="intId") Long intId,
									 @RequestBody Interviewer updatedInterviewerInfo) {
		
		return interviewerService.updateInterviewer(intId, updatedInterviewerInfo);
	}
	
	@DeleteMapping("/{intId}")
	public ResponseEntity<?> deleteInterviewer(@PathVariable(value="intId") Long intId) {
		return interviewerService.deleteInterviewer(intId);
	}
}
