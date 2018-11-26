import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ClienteService {

  private urlEndPint:string = 'http://shrouded-ocean-90048.herokuapp.com/v1/user/';

  constructor(private http:HttpClient) { }

  getClientes(): Observable <Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPint);
  }
}
