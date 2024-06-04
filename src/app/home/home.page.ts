// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  student: Student = { nombre: '', matricula: '', calificacion: '', direccion: '' };
  students: Student[] = [];

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  addStudent() {
    this.studentService.addStudent(this.student);
    this.students = this.studentService.getStudents();
    this.student = { nombre: '', matricula: '', calificacion: '', direccion: '' };
  }

  deleteStudent(matricula: string) {
    this.studentService.deleteStudent(matricula);
    this.students = this.studentService.getStudents();
  }

  viewDetails(matricula: string) {
    this.router.navigate(['/student-detail', matricula]);
  }
}


