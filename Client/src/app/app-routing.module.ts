import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatsComponent } from './chats/chats.component';
import { ExpertComponent } from './expert/expert.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: HomeComponent},
  { path: 'salaahDo', component: ExpertComponent},
  { path: 'chats', component: ChatsComponent},
  { path: 'chat/:id', component: ChatComponent },
  { path: 'profile', component: ProfileComponent},
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
