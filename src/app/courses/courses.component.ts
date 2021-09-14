import { ConfirmationComponent } from './../shared/components/confirmation/confirmation.component';
import { Course } from './../shared/course.model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(course: Course, e: Event) {
    e.stopPropagation();
    // dialogref and open the dialog
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: { message: 'Are you sure you want to delete the course' },
    });
    //subscribe to dialog result
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`dialog result => ${result}`);
      if (result) {
        this.courses = this.courses.filter((co) => course.id !== co.id);
        this._snackBar.open('Course Deleted Successfully', 'Splash', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000,
        });
      }
    });
  }
}
