import { Course } from './../../shared/models/course.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  selectedCourse: Course;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() canceled = new EventEmitter();

  @Input() set course(value: Course) {
    if (value) {
      // this.selectedCourse = { ...value };
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }

  formatLabel(value: number) {
    return `${value}%`;
  }
}
