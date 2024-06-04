// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  deleteStudent(matricula: string) {
    this.students = this.students.filter(s => s.matricula !== matricula);
  }

  getStudentByMatricula(matricula: string): Student | undefined {
    return this.students.find(s => s.matricula === matricula);
  }
}
