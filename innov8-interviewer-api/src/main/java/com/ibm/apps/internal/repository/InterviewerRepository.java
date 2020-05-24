package com.ibm.apps.internal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.apps.internal.model.Interviewer;

public interface InterviewerRepository extends JpaRepository<Interviewer, Long>{

}
