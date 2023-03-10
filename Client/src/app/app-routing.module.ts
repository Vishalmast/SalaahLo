import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: HomeComponent},
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
