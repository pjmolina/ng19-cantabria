import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../domain/user';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(users: User[], searchString: string | undefined | null): User[] {
    if (searchString) {
      return users.filter((u) => {
        const nombreCompleto =
          `${u.nombre} ${u.apellido} ${u.age}`.toLowerCase();
        return nombreCompleto.includes(searchString.toLowerCase());
      });
    }
    return users;
  }
}
