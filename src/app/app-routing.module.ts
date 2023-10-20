import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: "full" },
  { path: "home", component: HomeComponent, title: "Home Page" },
  { path: "Product", component: AllProductsComponent, title: "Our Products" },
  { path: "Login", component: LoginComponent, title: "Login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
