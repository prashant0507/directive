import { 
  Directive, 
  Renderer2, 
  OnInit, 
  HostBinding, 
  HostListener, 
  Input, 
  ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  constructor(private renderer: Renderer2, private ref: ElementRef) { }

  @Input('defaultClr') defaultClr = '';

  @HostBinding('attr.role') role = 'admin';

  @HostListener('click') onClickFun() {
    this.role = this.role === 'admin' ? 'user' : 'admin';
  }

  @HostListener('mouseenter') onmouseenterFun() {
    this.renderer.setStyle(this.ref.nativeElement,'backgroundColor', 'green')
  }

  @HostListener('mouseleave') onmouseleaveFun() {
    this.renderer.setStyle(this.ref.nativeElement,'backgroundColor', 'yellow')
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.ref.nativeElement,'backgroundColor', this.defaultClr);
  }

}
