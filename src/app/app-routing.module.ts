import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentyieldComponent } from './modules/investmentyield/investmentyield.component';

const routes: Routes = [
  { path: '', redirectTo: 'basket', pathMatch: 'full' },
  { path: 'basket', component: InvestmentyieldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
