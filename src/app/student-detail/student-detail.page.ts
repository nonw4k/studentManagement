// src/app/student-detail/student-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {
  student: Student | undefined;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    const matricula = this.route.snapshot.paramMap.get('matricula');
    if (matricula) {
      this.student = this.studentService.getStudentByMatricula(matricula);
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
