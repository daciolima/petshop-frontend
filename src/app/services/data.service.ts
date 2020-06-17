import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';



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
    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }
}
