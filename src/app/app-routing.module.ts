import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressComponent } from './pages/impress/impress.component';
import { ImpressModule } from './pages/impress/impress.module';
import { ListComponent } from './pages/list/list.component';
import { ListModule } from './pages/list/list.module';
import { MapComponent } from './pages/map/map.component';
import { MapModule } from './pages/map/map.module';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { PrivacyModule } from './pages/privacy/privacy.module';

const routes: Routes = [
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'impress',
    component: ImpressComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ImpressModule,
    ListModule,
    MapModule,
    PrivacyModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
