import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.component.html',
})
export class SelectServiceComponent implements OnInit {
  mainCategoriesList: any = [];
  subCategoriesList: any = [];
  servicesList: any = [];

  selectedIndexs = {
    mainCategorySelectedIndex: 0,
    subCategorySelectedIndex: 0,
  };

  constructor(private service: SharedService) {}

  getAllCategoriesAndServices() {
    this.service.getAllCategoriesAndServices().subscribe((data) => {
      this.mainCategoriesList = data;
      this.getSubCategories(this.selectedIndexs.mainCategorySelectedIndex);
    });
  }

  getSubCategories(i: number) {
    this.selectedIndexs.mainCategorySelectedIndex = i;
    this.selectedIndexs.subCategorySelectedIndex = 0;
    this.subCategoriesList = this.mainCategoriesList[i].subCategory;
    this.getServices(this.selectedIndexs.subCategorySelectedIndex);
  }

  getServices(i: number) {
    this.selectedIndexs.subCategorySelectedIndex = i;
    this.servicesList =
      this.mainCategoriesList[
        this.selectedIndexs.mainCategorySelectedIndex
      ].subCategory[this.selectedIndexs.subCategorySelectedIndex].services;
  }

  ngOnInit(): void {
    this.getAllCategoriesAndServices();
  }
}
