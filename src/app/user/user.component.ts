import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../domain/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() nombre: string = '.';
  @Input() apellido: string = '.';
  @Output() seleccionado = new EventEmitter<User>();

  constructor() {
    console.log('Constructor Invocado UserComponent  nombre:' + this.nombre);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit desde UserComponent   nombre:' + this.nombre);
  }

  selecciona(): void {
    console.log('Hemos seleccionado a ' + this.nombre);

    this.seleccionado.emit({
      nombre: this.nombre,
      apellido: this.apellido,
    });
  }
}
