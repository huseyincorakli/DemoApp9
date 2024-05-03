import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  template:`
   <h1>Standalone Components & bootstrapApplication Function </h1>
   <p>Uygulamadaki modüler bağımlılıktan kurtulmamızı sağlar.</p>
   <p>Standalone Component hangi modulde kullanılacaksa orada import edilmesi gerekmektedir</p>
   <p>Standalone bir componentin başka bir standalone componenti import edebilmesi için Standalone olması gerekmektedir ya da componentin bulunduğu modulde import edilmelidir.</p>
   <p>Standalone yapılarda modüler yapıları kullanmak için imports özelliği kullanılır.</p>
   <p>Router input sıralaması : Resolve - Data - Path Params - Query Params</p>
    <hr>
    <a routerLinkActive="active" routerLink="home">Home</a> |
     <a routerLinkActive="active" routerLink="about">About</a> |
      <a  routerLinkActive="active" routerLink="contact">Contact</a>|  
      <a  routerLinkActive="active" routerLink="products/123">Products</a>| <br> 
    <router-outlet></router-outlet>
  `,
  standalone:true,
  imports:[RouterModule,CommonModule,HomeComponent],
  styles:[".active{color:red;}"]
})
export class AppComponent {
  title = 'DemoApp9';
}
