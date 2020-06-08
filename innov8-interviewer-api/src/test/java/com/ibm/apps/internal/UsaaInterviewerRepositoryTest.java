package com.ibm.apps.internal;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import com.ibm.apps.internal.model.Interviewer;
import com.ibm.apps.internal.repository.InterviewerRepository;

@DataJpaTest
public class UsaaInterviewerRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;
 
    @Autowired
    private InterviewerRepository interviewerRepository;
    
    @BeforeEach
    public void setupData() {
    	Interviewer interviewer1 = new Interviewer("Interviewer1", "12345", 
    			"int@email.com", "Java", "Fullstack", true, true, "Monday, Tuesday and Wednesday",
    			"5:30PM to 7:00PM", "sample-webex-url", "s3-url");
    	Interviewer interviewer2 = new Interviewer("Interviewer2", "54321", 
    			"int@email.com", "Java", "Webservices", false, false, "Monday, Tuesday and Wednesday",
    			"5:30PM to 7:00PM", "sample-webex-url", "s3-url");
    	
    	entityManager.persist(interviewer1);
    	entityManager.persist(interviewer2);
    	entityManager.flush();
    }
    
    @Test
    @DisplayName("Retrieve interviewers test")
    public void getAllInterviewersSuccessfully() {
    	List<Interviewer> interviewerList = interviewerRepository.findAll();
    	
    	assertEquals(interviewerList.size(), 2);
    }
    
    @Test
    @DisplayName("Retrieve interviewers by id test")
    public void getInterviewersByIdSuccessfully() {
    	Interviewer interviewer = interviewerRepository.findAll().get(0);
    	Optional<Interviewer> foundById = interviewerRepository.findById(interviewer.getInterviewerId());
    	
    	assertEquals(foundById.get().getInterviewerId(), interviewer.getInterviewerId());
    }
    
    @Test
    @DisplayName("Add interviewers test")
    public void addInterviewersSuccessfully() {
    	Interviewer interviewer1 = new Interviewer("Interviewer1", "12345", 
    			"int@email.com", "Java", "Fullstack", true, true, "Monday, Tuesday and Wednesday",
    			"5:30PM to 7:00PM", "sample-webex-url", "s3-url");
    	
    	interviewerRepository.save(interviewer1);
    	
    	List<Interviewer> interviewerList = interviewerRepository.findAll();
    	
    	assertEquals(interviewerList.size(), 3);
    }
    
    @Test
    @DisplayName("Update interviewers by id test")
    public void updateInterviewersByIdSuccessfully() {
    	Interviewer interviewer = interviewerRepository.findAll().get(0);
    	Interviewer foundById = interviewerRepository.findById(interviewer.getInterviewerId()).get();
    	
    	foundById.setName("UPDATED");
    	interviewerRepository.save(foundById);
    	
    	foundById = interviewerRepository.findById(interviewer.getInterviewerId()).get();
    	
    	assertEquals(foundById.getName(), "UPDATED");
    }
    
    @Test
    @DisplayName("Delete interviewers test")
    public void deleteInterviewersSuccessfully() {
    	Interviewer interviewer = interviewerRepository.findAll().get(0);
    	Optional<Interviewer> foundById = interviewerRepository.findById(interviewer.getInterviewerId());
    	
    	interviewerRepository.deleteById(foundById.get().getInterviewerId());
    	
    	assertEquals(interviewerRepository.findAll().size(), 1);
    }
}