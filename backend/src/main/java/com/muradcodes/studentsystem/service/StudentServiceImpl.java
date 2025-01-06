package com.muradcodes.studentsystem.service;

import com.muradcodes.studentsystem.model.Student;
import com.muradcodes.studentsystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
   private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Optional<Student> getById(int id) {
        Integer i = id;
        return studentRepository.findById(i);
    }

    @Override
    public void deleteStudent(int id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student updateStudent(Student student) {
//        studentRepository.updateStudentById(id);
        System.out.println("Student Service implementation");
        return studentRepository.save(student);
    }
}
