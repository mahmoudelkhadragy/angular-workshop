import { CoursesService } from './../shared/services/courses.service';
import { ConfirmationComponent } from './../shared/components/confirmation/confirmation.component';
import { Course } from '../shared/models/course.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private coursesServise: CoursesService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.resetSelectedCourse();
  }

  loadCourses() {
    this.coursesServise
      .allCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favourite: false,
    };
    this.selectedCourse = emptyCourse;
  }

  saveCourse(form: NgForm) {
    if (form.valid) {
      if (form.value.id) {
        this.coursesServise.updateCourse(form.value).subscribe((course) => {
          console.log('course is updated', course);
          this.loadCourses();
        });
      } else {
        this.coursesServise.createCourse(form.value).subscribe((course) => {
          console.log('course is created', course);
          this.loadCourses();
        });
      }
    }
  }

  deleteCourse(obj: { course: Course; e: Event }) {
    obj.e.stopPropagation();
    // dialogref and open the dialog
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { message: 'Are you sure you want to delete the course' },
    });
    //subscribe to dialog result
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`dialog result => ${result}`);
      if (result) {
        this.coursesServise.deleteCourse(obj.course.id).subscribe((course) => {
          console.log('course is deleted', course);
          this.loadCourses();
          this._snackBar.open('Course Deleted Successfully', 'Splash', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 2000,
          });
        });
      }
    });
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
