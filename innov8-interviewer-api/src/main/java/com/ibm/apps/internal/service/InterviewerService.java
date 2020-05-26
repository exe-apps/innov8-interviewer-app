package com.ibm.apps.internal.service;

import java.util.List;
import java.util.Optional;

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

	public List<Interviewer> getAllInterviewers() {
		return interviewerRepository.findAll();
	}

	public Interviewer getInterviewerById(Long id) {
		return interviewerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Interviewer", "id", id));
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
