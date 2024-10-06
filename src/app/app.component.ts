import { PostsService } from './posts.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from "./usuario/usuario.component";
import { CommonModule } from '@angular/common';
import { CambiarColorDirective } from './cambiar-color.directive';
import { ResumirPipe } from './resumir.pipe';
import { UsuariosService } from './usuarios.service';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, UsuarioComponent, CommonModule, CambiarColorDirective, ResumirPipe, HttpClientModule],
  templateUrl: './app.component.html',
  styles: [``],
})
export class AppComponent implements OnInit {

  /*nombre = 'Amelia';

  getNombre(){
    return this.nombre
  }
  
  onKeyUp(usuario:any){
    console.log(usuario)
  }

  persona = {
    nombre: "Jessica",
    apellido: "Reyes",
    edad: 20,
    trabajo: {
      telefono: "(346)-176-983"
    }
  }

  info = ""

  getMensaje(e:any){
    alert(e)
    this.info = e
  }

  isValid = true

  cursos = ['Java', 'Javascript', 'PHP', 'Python']

  personas:any = [][
    { id: 1, nombre:'Melanie', edad: 20, hobby: 'nadar' },
    { id: 2, nombre:'Cristina', edad: 18, hobby: 'dibujar' },
    { id: 3, nombre:'Katie', edad: 19, hobby: 'leer' },
    { id: 4, nombre:'Britney', edad: 20, hobby: 'spa' }
  ]

  onAgregar(){
    this.personas.push({ id: 5, nombre: 'Dennis', edad: 21, hobby: 'bromas' });
  }*/

    listaDePosts: Post[] = []//$!: Observable<Post[]>;

    constructor(
        //private usuariosService: UsuariosService,
        private postsservice: PostsService
    ){
        //this.personas = usuariosService.getUsuarios()
    }

    ngOnInit() {
        //console.log('Componente Inicializado')
        /*this.listaDePosts$ = */this.postsservice.getPosts().subscribe(response => {
            this.listaDePosts = response;
        })
    }

    crearPost(usuarioInput : HTMLInputElement){
        let post:any = { title : usuarioInput.value }
        usuarioInput.value = ''
        this.postsservice.crearPost(post).subscribe((response:any) => {
            post['id'] = response['id']
            this.listaDePosts.splice(0, 0, post)
        })
    }

  /*onBorrar(persona:any){
    let index = this.personas.indexOf(persona)
    this.
    personas.splice(index, 1)
  }

  getColor(hobby:string){
    switch(hobby){
      case 'nadar': return 'blue'
      case 'dibujar': return 'yellow'
      case 'leer': return 'green'
      case 'spa': return 'red'
      case 'bromas': return 'silver'
      default: return 'black'
    }
  }

  color:any

  curso = {
    titulo: "Curso de Angular",
    estudiantes: 20398,
    rating: 4.643,
    precio: 50,
    fechaDeLanzamiento: new Date(2019, 4, 5)
  }*/
}
