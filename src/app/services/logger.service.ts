import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggerService {
  log(msg: any) {
    console.log(msg);
  }
  error(msg: any) {
    console.error(msg);
  }
  warn(msg: any) {
    console.warn(msg);
  }
}

export class Logger2Service {
  log(msg: any) {
    const date = new Date().toISOString();
    console.log(date + ' ' + msg);
  }
  error(msg: any) {
    const date = new Date().toISOString();
    console.error(date + ' ' + msg);
  }
  warn(msg: any) {
    const date = new Date().toISOString();
    console.warn(date + ' ' + msg);
  }
}
