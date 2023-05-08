import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home';
  categoriesList: any = '';

  constructor(private service: SharedService, private renderer: Renderer2) {}

  someFunction(e: any) {
    console.log(this.categoriesList);
  }

  getNestedCategories() {
    this.service.getNestedCategories().subscribe((data) => {
      this.categoriesList = data;
    });
  }

  ngAfterViewInit() {}

  ngOnInit() {
    this.getNestedCategories();
  }

  onSubmit() {}
}
