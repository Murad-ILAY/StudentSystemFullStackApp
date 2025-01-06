package com.muradcodes.studentsystem.controller;

import com.muradcodes.studentsystem.model.Student;
import com.muradcodes.studentsystem.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public ResponseEntity<String> add(@Valid @RequestBody Student student){
        studentService.saveStudent(student);
        return ResponseEntity.ok("Student added successfully!");
    }

    @GetMapping("/getAll")
        public List<Student> getAllStudents(){
      return  studentService.getAllStudents();
        }

        @GetMapping("getById/{id}")
    public Optional<Student> getStudentById(@PathVariable int id){
        return studentService.getById(id);
        }

        @DeleteMapping("/deleteStudent/{id}")
    public String deleteStudentById(@PathVariable int id){
        studentService.deleteStudent(id);
        return "Student deleted successfully";
        }
        @PutMapping ("/updateStudent/{id}")
    public ResponseEntity<String>  updateStudent(@Valid @RequestBody Student student){
            System.out.println("Hello");
            return ResponseEntity.ok("Student added successfully!");
        }
}
