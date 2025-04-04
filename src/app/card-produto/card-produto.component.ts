import { Component } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  standalone: false,
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {
  produto: any = {id: 1, nome:"Produto 1", preco: 100};
}
