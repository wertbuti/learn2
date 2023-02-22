import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginssoComponent } from './loginsso/loginsso.component';
import { QuestionComponent } from './question/question.component';
import { RahnamaComponent } from './rahnama/rahnama.component';

const routes: Routes = [
  {component:LoginssoComponent,path:'loginsso'},
  {component:QuestionComponent,path:'question'},
  {component:RahnamaComponent,path:'rahnama'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
