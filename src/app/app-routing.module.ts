import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: 'first-component', component: CalculatorComponent},
  {path: 'second-component', component: InfoComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
