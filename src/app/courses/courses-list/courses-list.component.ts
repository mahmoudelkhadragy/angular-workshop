import { Course } from './../../shared/models/course.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() courses: Course[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
