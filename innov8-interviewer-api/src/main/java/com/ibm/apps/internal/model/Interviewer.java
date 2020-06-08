package com.ibm.apps.internal.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "interviewer")
public class Interviewer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(updatable = false, nullable = false)
	private Long interviewerId;
	
	private String name;
	
	private String contactNumber;
	
	private String email;
	
	private String skill;
	
	private String specialization;
	
	private boolean cvReviewer;
	
	private boolean bbsiInterviewer;
	
	private String daysAvailable;
	
	private String timeAvailable;
	
	private String webexUrl;
	
	private String imageUrl;
	
	public Interviewer() {}
	
	public Interviewer(String name, String contactNumber, String email, String skill, String specialization,
			boolean cvReviewer, boolean bbsiInterviewer, String daysAvailable, String timeAvailable, String webexUrl,
			String imageUrl) {
		super();
		this.name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.skill = skill;
		this.specialization = specialization;
		this.cvReviewer = cvReviewer;
		this.bbsiInterviewer = bbsiInterviewer;
		this.daysAvailable = daysAvailable;
		this.timeAvailable = timeAvailable;
		this.webexUrl = webexUrl;
		this.imageUrl = imageUrl;
	}
	
	public Long getInterviewerId() {
		return interviewerId;
	}
	public void setInterviewerId(Long interviewerId) {
		this.interviewerId = interviewerId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public String getDaysAvailable() {
		return daysAvailable;
	}
	public void setDaysAvailable(String daysAvailable) {
		this.daysAvailable = daysAvailable;
	}
	public String getTimeAvailable() {
		return timeAvailable;
	}
	public void setTimeAvailable(String timeAvailable) {
		this.timeAvailable = timeAvailable;
	}
	public String getWebexUrl() {
		return webexUrl;
	}
	public void setWebexUrl(String webexUrl) {
		this.webexUrl = webexUrl;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public boolean isCvReviewer() {
		return cvReviewer;
	}
	public void setCvReviewer(boolean cvReviewer) {
		this.cvReviewer = cvReviewer;
	}
	public boolean isBbsiInterviewer() {
		return bbsiInterviewer;
	}
	public void setBbsiInterviewer(boolean bbsiInterviewer) {
		this.bbsiInterviewer = bbsiInterviewer;
	}
}
