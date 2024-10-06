import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCambiarColor]',
  standalone: true
})
export class CambiarColorDirective {

  @Input('appCambiarColor') nuevoColor : string | undefined
  constructor(
    private el: ElementRef
  ) { }
  
  @HostListener('mouseenter')
  onMouseEnter(){
    this.cambiarColor(this.nuevoColor)
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.cambiarColor(null)
  }

  cambiarColor(color:any){
    this.el.nativeElement.style.backgroundColor = color
  }

}
