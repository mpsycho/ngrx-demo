import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsPageActions } from '../state/products.actions';
import { selectProducts, selectProductsErrorMessage, selectProductsLoading, selectProductsShowProductCode, selectProductsTotal } from '../state/products.selectors';
import { ProductsStore } from '../products.store';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
  providers: [ProductsStore] // ComponentStore
})
export class ProductsPageComponent {
  products2$ = this.productsStore.products$; // ComponentStore
  products$ = this.store.select(selectProducts);
  total$ = this.store.select(selectProductsTotal)
  loading$ = this.store.select(selectProductsLoading);
  showProductCode$ = this.store.select(selectProductsShowProductCode);
  errorMessage$ = this.store.select(selectProductsErrorMessage);

  constructor(private store: Store, private productsStore: ProductsStore) { // ComponentStore
    this.store.subscribe((store) => console.log(store));
  }

  ngOnInit() {
    this.productsStore.getProducts(); // ComponentStore
  }

  toggleShowProductCode() {
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
