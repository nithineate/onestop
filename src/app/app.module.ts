import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { StoreLocatorComponent } from './components/store-locator/store-locator.component';

import { ShoppingCartIcon } from 'lucide-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CategoryPageComponent,
    CartComponent,
    ProductGridComponent,
    ProductCardComponent,
    CategoryCardComponent,
    StoreLocatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'category/:category', component: CategoryPageComponent },
      { path: 'product/:id', component: ProductDetailComponent }
    ]),
    ShoppingCartIcon
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }