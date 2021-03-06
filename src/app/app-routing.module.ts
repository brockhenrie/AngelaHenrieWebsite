import { AuthService } from 'src/app/services/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'' , component: HomeComponent},

  {path:'home' , component: HomeComponent},
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'admin',
    canActivate:[AuthService],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path:'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path:'user',
    canActivate:[AuthService],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path:'cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  },
  {path:'**' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
