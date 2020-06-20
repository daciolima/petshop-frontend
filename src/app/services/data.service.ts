import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Security } from '../utils/security.util';



// O decorator abaixo permite que a class possa ser injetável em outra parte do sistema.
// A confi providedIn: 'root' permite que esse service fique disponível em todos os components
// Sem precisar configura-lo em cada localmente em cada component. Caso precise somente para 
// um determinado compoment assine apenas o @Injectable() e no conf do component carregue: 
// @Component({ providers: [ Classe do serviço ]})
@Injectable({providedIn: 'root'})
export class DataService {

    public url = 'http://localhost:3000/v1';

    constructor(
        private http: HttpClient
    ) {}


    public composeHeaders() {
        const token = Security.getToken();
        //const token = localStorage.getItem('petshop.token');
        //const headers = new HttpHeaders().set('x-access-token', token);
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }


    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    create(data) {
        return this.http.post(`${this.url}/accounts`, data);
    }

    authenticate(data) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken() {
        return this.http.post(`${this.url}/accounts/refresh-token`, null,
        { headers: this.composeHeaders() });
    }

    getProfile() {
        return this.http.get(`${this.url}/accounts`, { headers: this.composeHeaders() });
    }

    updateProfile(data) {
        return this.http.put(`${this.url}/accounts`, data, { headers: this.composeHeaders() });
    }

    resetPassword(data) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }
}
