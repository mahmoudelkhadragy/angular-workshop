import { Course } from '../shared/models/course.model';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChildren(MatExpansionPanel) panels: QueryList<MatExpansionPanel>;
  @ViewChildren('panel2') panel: MatAccordion;

  items: Course[] = [
    {
      id: 1,
      title: `course 1`,
      description: 'course 1 details',
      percentComplete: 0,
      favourite: false,
    },
    {
      id: 2,
      title: 'course 2',
      description: 'course 2 details',
      percentComplete: 0,
      favourite: false,
    },
    {
      id: 3,
      title: 'course 3',
      description: 'course 3 details',
      percentComplete: 0,
      favourite: false,
    },
    {
      id: 4,
      title: 'course 4',
      description: 'course 4 details',
      percentComplete: 0,
      favourite: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  viewItem(i: any) {
    console.log(i);
  }

  closeOtherPanels() {
    // this.panel.closeAll();
    // this.panels.forEach((panel) => {
    //   if (panel !== openPanel) {
    //     panel.close();
    //   }
    // });
  }
}
