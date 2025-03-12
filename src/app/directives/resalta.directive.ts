import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResalta]',
})
export class ResaltaDirective implements OnInit {
  @Input() appResalta = '';
  @Input() color = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      this.appResalta || 'lightgreen'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'color',
      this.color || 'black'
    );
  }
}
