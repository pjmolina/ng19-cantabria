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
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-user',
  imports: [NgIf, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  //providers: [LoggerService],
})
export class UserComponent implements OnInit, OnDestroy {
  @Input() user?: User;

  @Output() seleccionado = new EventEmitter<User>();

  constructor(private logger: LoggerService) {
    logger.log(
      'Constructor Invocado UserComponent  nombre:' + this.user?.nombre
    );
  }
  ngOnDestroy(): void {
    this.logger.log('ngOnDestroy');
  }
  ngOnInit(): void {
    this.logger.log(
      'ngOnInit desde UserComponent   nombre:' + this.user?.nombre
    );
  }

  selecciona(): void {
    this.logger.log('Hemos seleccionado a ' + this.user?.nombre);

    this.seleccionado.emit(this.user!);
  }
}
