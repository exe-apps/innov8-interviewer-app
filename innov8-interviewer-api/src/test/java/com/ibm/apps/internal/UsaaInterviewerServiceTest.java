package com.ibm.apps.internal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.ibm.apps.internal.model.Interviewer;
import com.ibm.apps.internal.repository.InterviewerRepository;
import com.ibm.apps.internal.service.InterviewerService;

@SpringBootTest
public class UsaaInterviewerServiceTest {

    @InjectMocks
    private InterviewerService interviewerService;
 
    @Mock
    private InterviewerRepository interviewerRepository;
    
    @BeforeEach
    public void setupData() {
    	Interviewer interviewer1 = new Interviewer("Interviewer1", "12345", 
    			"int@email.com", "Java", "Fullstack", true, true, "Monday, Tuesday and Wednesday",
    			"5:30PM to 7:00PM", "sample-webex-url", "s3-url");
    	Interviewer interviewer2 = new Interviewer("Interviewer2", "54321", 
    			"int@email.com", "Java", "Webservices", false, false, "Monday, Tuesday and Wednesday",
    			"5:30PM to 7:00PM", "sample-webex-url", "s3-url");
    	
    	List<Interviewer> interviewersList = new ArrayList<>();
    	interviewersList.add(interviewer1);
    	interviewersList.add(interviewer2);
    	
    	when(interviewerRepository.findAll()).thenReturn(interviewersList);
    }
    
    @Test
    @DisplayName("Retrieve interviewers test (SERVICE)")
    public void getAllInterviewersSuccessfully() {
    	List<Interviewer> interviewerList = interviewerService.getAllInterviewers();
    	
    	assertEquals(interviewerList.size(), 2);
    }
    
}