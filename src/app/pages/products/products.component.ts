import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template:`
  Products
  {{id}}
  {{productName}}
  {{products|json}}
  `
})
export class ProductsComponent {
@Input() id:string;
@Input() products:[];
@Input() productName:string;

ngOnInit(){
  console.log(this.id);
  console.log(this.productName);
  console.log(this.products);
  
}

}
