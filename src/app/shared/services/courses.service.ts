import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  url = `http://localhost:3000/courses`;

  constructor(private http: HttpClient) {}

  allCourses() {
    return this.http.get<Course[]>(this.url);
  }

  findCourse(courseId: number) {
    return this.http.get(`${this.url}/${courseId}`);
  }

  createCourse(course: Course) {
    return this.http.post(this.url, course);
  }

  updateCourse(course: Course) {
    return this.http.put(`${this.url}/${course.id}`, course);
  }

  deleteCourse(courseId: number | null) {
    return this.http.delete(`${this.url}/${courseId}`);
  }
}
