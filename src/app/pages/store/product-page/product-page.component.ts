import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  // OBS: O subscribe fica esperando algo acontecer, mas não fecha.
  // O Observable irá ficar observando o products e enviando informações, quando acabar ele fecha.
  // Por convensão usa-se um $ na variável para informar que terá retorno assincrono(async).
  public products$: Observable<Product[]>;

  // Recmenda-se criar variável aqui de forma leve, visto que o component só é criado
  // depois que o contrutor é lido.
  constructor(
    private serviceData: DataService
  ) { }

  // OnInit é executado significando que o component já está criado
  ngOnInit() {
    // metodo getProducts() ja se torna Observable quando o seu service é Injectable.
    this.products$ = this.serviceData.getProducts();
  }

}

