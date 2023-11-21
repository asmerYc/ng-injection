import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './ng-injection/components/second/second.component';
import { HeroListComponent } from './ng-injection/components/hero-list/hero-list.component';
import { IntroduceHeroComponent } from './ng-injection/components/introduce-hero/introduce-hero.component';

const routes: Routes = [
  {path:'', redirectTo:'/hero-list',pathMatch:'full'},
  {path:'hero-list', component:HeroListComponent},
  {path:'introduce-hero', component:IntroduceHeroComponent},

  {path:'second-component', component:SecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
