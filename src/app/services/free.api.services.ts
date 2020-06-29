import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpParams, HttpHeaders} from '@angular/common/http'
import { Usuario } from 'src/models/usuario.model';

@Injectable()
export class freeApiService
{
    constructor(private httpClient : HttpClient) {
    }
    getUsuarioRegistrado( cpf:string) : Observable<any>
    {
            return this.httpClient.get("https://localhost:44363/api/usuarios/"+cpf);
    }

    CreateUusarioPost(user : Usuario) : Observable<any>
    {
        return this.httpClient.post("https://localhost:44363/api/usuarios/",user);
    }
    getTodosTeste() : Observable<any>
    {
            const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
            return this.httpClient.get("https://localhost:44363/api/usuarios/",{ headers: headers });
    }

}   