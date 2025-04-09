import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { Planet } from '../../domain/planet';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planet-detail',
  imports: [NgIf],
  templateUrl: './planet-detail.component.html',
  styleUrl: './planet-detail.component.scss',
})
export class PlanetDetailComponent implements OnInit, OnDestroy {
  planet: Planet | undefined = undefined;
  loading = true;
  error = '';
  sub?: Subscription;

  constructor(
    private planetService: PlanetService,
    private route: ActivatedRoute
  ) {
    console.log('Construido');
  }

  ngOnInit(): void {
    console.log('Init');

    this.sub = this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id');
      console.log('nueva ruta id:' + id);
      if (id) {
        this.loading = true;
        this.planetService.getPlanet(id).subscribe({
          next: (planet) => {
            console.log('tengo planeta');
            this.planet = planet;
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
            this.planet = undefined;
            this.error = err.message;
          },
        });
      }
    });
  }
  ngOnDestroy(): void {
    console.log('Destruido');

    this.sub?.unsubscribe();
  }
}
