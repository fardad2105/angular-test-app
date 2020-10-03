import { Component, Input, OnInit } from '@angular/core';
import { subCategories } from '../../../../shared/data/Category';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-subCategories',
  templateUrl: './subCategories.component.html',
  styleUrls: ['./subCategories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  panelStateArrow = 'keyboard_arrow_right';
  @Input() subCategories: subCategories[];

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
