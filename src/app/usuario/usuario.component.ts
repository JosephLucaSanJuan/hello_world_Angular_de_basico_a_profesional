import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  @Input('persona') person: any;
  @Output() enviar = new EventEmitter<string>()

  mensaje = "Yo so y el componente hijo";

  ejecutarEvento(){
    this.enviar.emit(this.mensaje)
  }
}
