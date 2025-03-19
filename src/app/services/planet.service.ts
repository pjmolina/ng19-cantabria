import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet, PlanetDto, Page } from '../domain/planet';
import { delay, map, Observable } from 'rxjs';

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
      // delay(3000)
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
