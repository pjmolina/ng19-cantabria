import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  imports: [FormsModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  n = 5;
  resultado = 0;
  mensaje = 'en reposo';

  constructor(private cd: ChangeDetectorRef) {}

  calcular(): void {
    this.mensaje = 'calculando...';
    this.cd.detectChanges();

    this.resultado = fib(+this.n);
    this.mensaje = 'en reposo';
    this.cd.detectChanges();
  }
}

// mnemoization

const fib = (n: number): number => {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};
