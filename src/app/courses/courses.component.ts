import { Course } from './../shared/course.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { id: 1, title: `course 1` },
    { id: 2, title: 'course 2' },
    { id: 3, title: 'course 3' },
    { id: 4, title: 'course 4' },
  ];

  selectedCourse: Course | null = null;
  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(course: Course, e: Event) {
    e.stopPropagation();
    if (confirm('Do You want to delete this message')) {
      this.courses = this.courses.filter((co) => course.id !== co.id);
    }
  }
}
