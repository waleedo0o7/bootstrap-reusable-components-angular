import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { rButton } from './shared-components/r-button.component';
import { rHeading } from './shared-components/r-heading.component';
import { rText } from './shared-components/r-text.component';
import { rModal } from './shared-components/r-modal.component';
import { FormsModule } from '@angular/forms';
import { SelectServiceComponent } from './views/select-service/select-service.component'; //import FormsModule

@NgModule({
  declarations: [AppComponent, rButton, rHeading, rText, rModal, SelectServiceComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
