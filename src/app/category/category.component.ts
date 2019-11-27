import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import {CategoryService} from   '../services/category.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
 
})
export class CategoryComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private categoryService: CategoryService, routerModule: RouterModule) { }
  title = "Category"
  categories: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>
      {
        this.categories=data;
      })
  }

}
