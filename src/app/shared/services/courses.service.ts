import { Injectable } from '@angular/core';
import { Course } from './../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    {
      id: 1,
      title: `course 1`,
      description: 'course 1 details',
      percentComplete: 88,
      favourite: false,
    },
    {
      id: 2,
      title: 'course 2',
      description: 'course 2 details',
      percentComplete: 43,
      favourite: false,
    },
    {
      id: 3,
      title: 'course 3',
      description: 'course 3 details',
      percentComplete: 10,
      favourite: false,
    },
    {
      id: 4,
      title: 'course 4',
      description: 'course 4 details',
      percentComplete: 33,
      favourite: true,
    },
  ];

  constructor() {}

  allCourses() {
    return this.courses;
  }

  findCourse(courseId: number) {
    return this.courses.find((course) => courseId === course.id);
  }

  createCourse(course: Course) {
    const id = this.courses.length + 2;
    this.courses.push({ ...course, id });
    console.log('course created');
    console.log(this.courses);
  }

  updateCourse(course: Course) {
    const index = this.courses.findIndex((co) => course.id === co.id);
    this.courses[index] = { ...course };
    console.log('course is updated');
    console.log(this.courses);
  }

  deleteCourse(courseId: number | null) {
    if (typeof courseId === 'number') {
      this.courses = this.courses.filter((co) => co.id !== courseId);
      console.log('course deleted');
      console.log(this.courses);
    } else {
      console.log('not number');
    }
  }
}
