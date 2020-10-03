import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SubCategoriesComponent } from './components/subCategories/subCategories.component';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [MainComponent, HomeComponent, LoginComponent, SubCategoriesComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatExpansionModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class MainModule { }
