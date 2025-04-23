import { Routes } from '@angular/router';
import { PlanetListComponent } from './planets/planet-list/planet-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanetDetailComponent } from './planets/planet-detail/planet-detail.component';
import { adminGuard, authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  // { path: 'ejemplo', component: EjemploComponent },
  {
    path: 'ejemplo',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./ejemplo/ejemplo.module').then((m) => m.EjemploModule)
  },
  {
    path: 'planetas',
    children: [
      { path: '', component: PlanetListComponent },

      { path: ':id', component: PlanetDetailComponent }
    ]
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadChildren: () =>
      import('./ejemplo/ejemplo.module').then((m) => m.EjemploModule)
  },

  { path: '**', component: NotFoundComponent }
];

export const rutasHijas: Routes = [
  { path: 'detalle/:id', component: PlanetDetailComponent }
];
