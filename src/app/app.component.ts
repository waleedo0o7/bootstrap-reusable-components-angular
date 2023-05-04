import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Home';

  contactForm = new FormGroup({
    firstname: new FormControl("",Validators.required),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),

    address : new FormGroup({
      city : new FormControl(),
      street : new FormControl(),
      pincode : new FormControl(),
      country : new FormControl()
    })
  });

  words = {
    en: 'Hello this is reusable H1',
    ar: 'اهلا و سهلا ',
  };

  constructor() {}

  ngOnInit() {
    // console.log(this.contactForm);
  }

  onSubmit() {
    // console.log(this.contactForm);
  }
}
