import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComicDetailsComponent } from './components/comic-details/comic-details.component';
import { ComicListComponent } from './components/comic-list/comic-list.component';

const routes: Routes = [
  {path: '', component: ComicListComponent},
  {path: 'details/:id', component: ComicDetailsComponent}

  //{path: '**', component: NotFoundComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
