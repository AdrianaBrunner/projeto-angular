import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bancos } from './interface/Bancos';

@Injectable({
  providedIn: 'root'
})

export class ConsultaServiceService {

  baseUrl: string = 'https://brasilapi.com.br/api/banks/v1'

  constructor(private http: HttpClient) {}

  getBancos() {
    return this.http.get<Bancos[]>(this.baseUrl)}

}
