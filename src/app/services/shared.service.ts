import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getAllCategoriesAndServices() {
    return this.http.get('http://localhost:8000/mainCategory');
  }

  getNestedCategories() {
    return this.http.get('http://localhost:8000/nestedCategories');
  }
}
