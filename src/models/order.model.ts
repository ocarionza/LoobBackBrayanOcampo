import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Person} from './person.model';
import {Product} from './product.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_product: string;

  @property({
    type: 'number',
    required: true,
  })
  cant_product: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @belongsTo(() => Person, {name: 'person'})
  id_person: string;

  @hasOne(() => Product, {keyTo: 'id_order'})
  product: Product;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
