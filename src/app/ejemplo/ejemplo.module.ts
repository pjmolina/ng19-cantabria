import { NgModule } from '@angular/core';
import { EjemploComponent } from './ejemplo.component';
import { RouterModule, Routes } from '@angular/router';

export const rutasHijas: Routes = [{ path: '', component: EjemploComponent }];

@NgModule({
  imports: [RouterModule.forChild(rutasHijas)],
  exports: [RouterModule]
})
export class EjemploModule {}
