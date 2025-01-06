package com.muradcodes.studentsystem.service;

import com.muradcodes.studentsystem.model.Student;

import java.util.List;
import java.util.Optional;


public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Optional<Student> getById(int id);
    public void deleteStudent(int id);
    public Student updateStudent(Student student);
}
