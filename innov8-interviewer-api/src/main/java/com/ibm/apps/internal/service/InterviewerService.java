package com.ibm.apps.internal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ibm.apps.internal.exception.ResourceNotFoundException;
import com.ibm.apps.internal.model.Interviewer;
import com.ibm.apps.internal.repository.InterviewerRepository;

@Service
public class InterviewerService {

	@Autowired
	private InterviewerRepository interviewerRepository;
	
	private final static String BBSI_CONSTANT = "BBSI"; 

	public List<Interviewer> getAllInterviewers() {
		return interviewerRepository.findAll();
	}

	public Interviewer getInterviewerById(Long id) {
		return interviewerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Interviewer", "id", id));
	}
	
	public List<Interviewer> getInterviewerBySkill(String skill) {
		
		List<Interviewer> interviewerList = null;
		
		if(skill.equals(BBSI_CONSTANT)) {
			interviewerList = interviewerRepository.findBySkillOrBbsiInterviewerTrue(skill);
		} else {
			interviewerList = interviewerRepository.findBySkill(skill);
		}
		
		if(interviewerList.size() == 0) {
			throw new ResourceNotFoundException("Interviewer", "skill", skill);
		}
		
		return interviewerList;
	}

	public Interviewer addInterviewer(Interviewer newInterviewer) {
		return interviewerRepository.save(newInterviewer);
	}

	public Interviewer updateInterviewer(Long id, Interviewer updatedInterviewerInfo) {

		Interviewer interviewer = interviewerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Interviewer", "id", id));

		interviewer.setName(updatedInterviewerInfo.getName());
		interviewer.setContactNumber(updatedInterviewerInfo.getContactNumber());
		interviewer.setEmail(updatedInterviewerInfo.getEmail());
		interviewer.setSkill(updatedInterviewerInfo.getSkill());
		interviewer.setSpecialization(updatedInterviewerInfo.getSpecialization());
		interviewer.setCvReviewer(updatedInterviewerInfo.isCvReviewer());
		interviewer.setBbsiInterviewer(updatedInterviewerInfo.isBbsiInterviewer());
		interviewer.setDaysAvailable(updatedInterviewerInfo.getDaysAvailable());
		interviewer.setTimeAvailable(updatedInterviewerInfo.getTimeAvailable());
		interviewer.setWebexUrl(updatedInterviewerInfo.getWebexUrl());
		interviewer.setImageUrl(updatedInterviewerInfo.getImageUrl());

		return interviewerRepository.save(interviewer);
	}

	public ResponseEntity<?> deleteInterviewer(Long id) {

		Interviewer interviewer = interviewerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Interviewer", "id", id));

		interviewerRepository.delete(interviewer);

		return ResponseEntity.ok().build();
	}
}
