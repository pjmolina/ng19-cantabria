import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Output() seleccionado = new EventEmitter<string>();

  selecciona(): void {
    console.log('Hemos seleccionado a ' + this.nombre);

    this.seleccionado.emit(this.nombre);
  }
}
