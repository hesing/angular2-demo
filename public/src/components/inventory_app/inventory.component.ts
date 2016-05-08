import {
  Component,
  EventEmitter
} from '@angular/core';

import {bootstrap} from '@angular/platform-browser-dynamic';

/**
 * Provides a `Product` object
 */
class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }
}

/**
 * @ProductImage: A component to show a single Product's image 
 */
@Component({
  selector: 'product-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  template: `
  <img class="product-image" [src]="product.imageUrl">
  `
})
class ProductImage {
  product: Product;
}

/**
 * @ProductDepartment: A component to show the breadcrumbs to a 
 * Product's department
 */
@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
class ProductDepartment {
  product: Product;
}

/**
 * @PriceDisplay: A component to show the price of a 
 * Product
 */
@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
  <div class="price-display">\${{ price }}</div>
  `
})
class PriceDisplay {
  price: number;
}

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'card card-block'},
  directives: [ProductImage, ProductDepartment, PriceDisplay],
  template: `
  <div class="row">
    <div class="col-sm-4">
      <product-image [product]="product"></product-image>
    </div>
    <div class="col-sm-6">
      <h3 class="card-title">{{ product.name }}</h3>
      <div class="meta">
        <div class="product-sku">SKU #{{ product.sku }}</div>
      </div>
      <p class="card-text">
        <product-department [product]="product"></product-department>
      </p>
    </div>
    <div class="col-sm-2">
      <price-display [price]="product.price"></price-display>
    </div>
  </div>
  `
})
class ProductRow {
  product: Product;
}

/**
 * @ProductsList: A component for rendering all ProductRows and 
 * storing the currently selected Product
 */
@Component({
  selector: 'products-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div>
    <product-row 
      *ngFor="let myProduct of productList" 
      [product]="myProduct" 
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </product-row>
  </div>
  `
})
class ProductsList {
  /**
   * @input productList - the Product[] passed to us
   */
  productList: Product[];

  /**
   * @ouput onProductSelected - outputs the current 
   *          Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing 
   *             the currently selected `Product`
   */
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app',
  directives: [ProductsList],
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products" 
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
export class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        'http://lorempixel.com/400/200/sports',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
      'http://lorempixel.com/400/200/sports/1',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
      'http://lorempixel.com/400/200/sports/1',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}