import { IUsuario } from './usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

type EntityResponseType = HttpResponse<IUsuario>;
type EntityArrayResponseType = HttpResponse<IUsuario[]>;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = URL_API;

  constructor(protected http: HttpClient) { }

  listarTodos(id: number): Observable<EntityArrayResponseType> {
    return this.http.get<IUsuario[]>(this.urlApi, { observe: 'response' });
  }

  criar(Usuario: IUsuario): Observable<EntityResponseType> {
    return this.http.post<IUsuario>(this.urlApi, Usuario, { observe: 'response' });
  }

  atualizar(Usuario: IUsuario): Observable<EntityResponseType> {
    return this.http.put<IUsuario>(this.urlApi, Usuario, { observe: 'response' });
  }

  procurar(id: number): Observable<EntityResponseType> {
    return this.http.get<IUsuario>(`${this.urlApi}/${id}`, { observe: 'response' });
  }

  excluir(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.urlApi}/${id}`, { observe: 'response' });
  }
  
}
