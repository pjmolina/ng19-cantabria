import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SessionService {
  getRoles(): Observable<string[]> {
    return of(['admin', 'auditor']);
  }
}
