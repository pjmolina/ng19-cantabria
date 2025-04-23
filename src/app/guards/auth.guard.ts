import { CanActivateFn } from '@angular/router';
import { conf } from '../environments/environment';
// import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return conf.feature3;
};

export const adminGuard: CanActivateFn = (route, state) => {
  // const session = inject(SessionService);  // JWT
  // return session.isAuthenticated && session.roles.includes("admin");

  return true;
};
