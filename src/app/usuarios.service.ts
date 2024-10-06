import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    getUsuarios(){
        return [
            { nombre:'Melanie', edad: 20, hobby: 'nadar' },
            { nombre:'Cristina', edad: 18, hobby: 'dibujar' },
            { nombre:'Katie', edad: 19, hobby: 'leer' },
            { nombre:'Britney', edad: 20, hobby: 'spa' }
        ]
    }
}