import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet, PlanetDto, Page } from '../domain/planet';
import { map, Observable, skip, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  constructor(private http: HttpClient) {}

  getPlanets(): Observable<Planet[]> {
    const url = 'https://swapi.dev/api/planets/?page=1';
    return this.http.get<Page<PlanetDto>>(url).pipe(
      map((page) => {
        return page.results.map((p) => convertFromDto(p)) || [];
      })
    );
  }
  getPlanetsWithPromise(): Promise<Planet[] | undefined> {
    const url = 'https://swapi.dev/api/planets/?page=1';
    return this.http
      .get<Page<PlanetDto>>(url)
      .pipe(
        map((page) => {
          return page.results.map((p) => convertFromDto(p)) || [];
        })
      )
      .toPromise();
  }
}

const convertFromDto = (p: PlanetDto): Planet => {
  return {
    ...p,
    // name: p.name,
    // climate: p.climate,
    // films: p.films,
    // residents: p.residents,
    // url: p.url,

    created: new Date(p.created),
    edited: new Date(p.edited),
    diameter: parseInt(p.diameter, 10),
    population: p.population === 'unknown' ? null : +p.population,
  } as Planet;
};

//  const sub = observable.pipe(
//     map((d) => d * 2),
//     delay(3000),
//     map((d) => d  + 1 ),
// ).pipe(
//
// ).subscribe({next, error, complete});

// sub.unsubscribe();

// 1. Productor/Consumidor
// 2. Iteracion / programacion funcional
// 3. Programaicon asincrona

// REST  GET / POST 1 |
// Websocket ----- SCADA

// X -> supermercado --> -10
