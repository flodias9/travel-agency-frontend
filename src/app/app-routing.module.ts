import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { NewClientComponent } from './client/new-client/new-client.component';

const routes: Routes = [
  {path: 'client/:id', component: ClientComponent},
  {path: 'client-list', component: ClientListComponent},
  {path: 'new-client', component: NewClientComponent},
  {path: 'update-client/:id', component: NewClientComponent},
  {path: '', redirectTo: '/client-list', pathMatch: 'full'},
  {path: '**', redirectTo: '/client-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
