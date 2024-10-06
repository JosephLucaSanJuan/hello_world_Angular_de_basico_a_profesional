import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private url = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(this.url)
    }

    crearPost(post:any){
        return this.http.post(this.url, JSON.stringify(post))
    }
}
