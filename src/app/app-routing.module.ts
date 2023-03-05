import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologyComponent } from './technology/technology.component';
import { SolutionComponent } from './solution/solution.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'solution', component: SolutionComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'about-us', component: AboutusComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'questions', component: QuestionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
