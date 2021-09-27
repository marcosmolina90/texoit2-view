import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class BaseRestService {

     // baseUrl = 'http://localhost:8081';
    baseUrl = environment.url;

    constructor(private http: HttpClient) { }

    

    

    

    getter( servico, parametros) {
        const url = this.baseUrl + (servico ?'/' + servico: '' )+ parametros;
        return this.http.get(url).pipe(map((res: any) => res));
    }


    post( metodo, objeto) {
        const url = this.baseUrl + '/' + metodo;
        return this.http.post(url, objeto).pipe(map((res: any) => res));
    }
}
