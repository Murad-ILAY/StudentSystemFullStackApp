package com.muradcodes.studentsystem.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Size(min=1, message="Name must contain at least 1 character ")
    private String name;
    @Size(min=1, max=50, message="Address must contain at least 1 character ")
    private String address;


    public Student() {
    }
    public Student(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
