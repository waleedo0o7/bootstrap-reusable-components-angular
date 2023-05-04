import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectServiceComponent } from './views/select-service/select-service.component';

const routes: Routes = [
  { path: 'select-service', component: SelectServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
