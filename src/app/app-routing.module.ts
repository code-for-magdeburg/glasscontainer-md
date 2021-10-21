import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [{
  path: 'map',
  component: MapComponent
  }, {
  path: 'list',
  component: ListComponent
  }, {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
