package com.muradcodes.studentsystem.repository;

import com.muradcodes.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
    @Modifying
    @Transactional
    @Query("UPDATE Student s SET s.name = :name, s.address = :address WHERE s.id = :id")
    public void updateStudentById(int id);
}
