import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/data/Category';
import { GetDataService } from '../../../../services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  panelOpenState =  false;
  panelStateArrow = 'keyboard_arrow_right';
  categoryData: Category;
  constructor(private getDataServcie: GetDataService) {
    this.getCategoryData();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  getCategoryData() {
    this.getDataServcie.GetCategoryData()
        .subscribe(data => {
          this.categoryData = data;
          console.log(this.categoryData.serverTime);
        });
  }

}
