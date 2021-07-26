import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './app.guard';
import { PrivateSpaceComponent } from './private-space/private-space.component';
import { PubSpaceComponent } from './pub-space/pub-space.component';


const routes: Routes = [
  // { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: 'welcome', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  // { path: 'profile', loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard] }
  { path: 'public', component: PubSpaceComponent },
  { path: 'private', component: PrivateSpaceComponent, canActivate: [AuthGuard]},
  { path: '**', component: PubSpaceComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
