import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product/product.model';

@Component({
  selector: 'es-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  @Input() productList!: ProductModel[];
  constructor() {}
}
