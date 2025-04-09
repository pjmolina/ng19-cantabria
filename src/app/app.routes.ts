import { Routes } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'planetas', component: PlanetListComponent },
  { path: 'planetas/:id', component: PlanetDetailComponent },
  { path: '**', component: NotFoundComponent },
];
