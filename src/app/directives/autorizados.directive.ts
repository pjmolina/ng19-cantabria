/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterContentInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SessionService } from '../services/session.service';

@Directive({
  selector: '[appAutorizados]'
})
export class AutorizadosDirective implements AfterContentInit {
  @Input() roles = '';

  constructor(
    private session: SessionService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngAfterContentInit(): void {
    this.session.getRoles().subscribe((roles) => {
      this.render(roles);
    });
  }

  render(roles: string[]): void {
    const rolesAutorizados = this.roles.split(';').map((e) => e.trim());
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const condicion = roles.find((r) => rolesAutorizados.includes(r));

    this.viewContainer.createEmbeddedView(this.templateRef);

    // if (condicion) {
    //   this.viewContainer.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainer.clear();
    // }
  }
}
