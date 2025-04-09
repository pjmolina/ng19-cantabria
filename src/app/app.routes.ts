import { Routes } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {
    path: 'planetas',
    children: [
      { path: '', component: PlanetListComponent },

      { path: ':id', component: PlanetDetailComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

export const rutasHijas: Routes = [
  { path: 'detalle/:id', component: PlanetDetailComponent },
];
