
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom, inject } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'


bootstrapApplication(AppComponent,{
    providers:[
        //providers
        importProvidersFrom(HttpClientModule),
        provideRouter([
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'home',loadComponent:()=>import('./app/pages/home/home.component').then(c=>c.HomeComponent)},
            {path:'about',loadComponent:()=>import('./app/pages/about/about.component').then(c=>c.AboutComponent)},
            {path:'contact',loadComponent:()=>import('./app/pages/contact/contact.component').then(c=>c.ContactComponent)},
            {path:'products/:id',data:{productName:"Elma"},resolve:{
                products:(route,state)=>{
                    const httpClient= inject(HttpClient)
                    return httpClient.get('https://jsonplaceholder.typicode.com/posts')
                }
            },loadComponent:()=>import('./app/pages/products/products.component').then(c=>c.ProductsComponent)},
        ],
        withPreloading(PreloadAllModules),withComponentInputBinding()),
    ],
}
)