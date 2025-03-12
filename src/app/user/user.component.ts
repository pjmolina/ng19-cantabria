import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { User } from '../domain/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() user?: User;

  @Output() seleccionado = new EventEmitter<User>();

  constructor() {
    console.log(
      'Constructor Invocado UserComponent  nombre:' + this.user?.nombre
    );
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit desde UserComponent   nombre:' + this.user?.nombre);
  }

  selecciona(): void {
    console.log('Hemos seleccionado a ' + this.user?.nombre);

    this.seleccionado.emit(this.user!);
  }
}
