import { Component, OnInit } from '@angular/core';
import { cart } from '../../mocks/mock-cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = cart;

  constructor() { }

  ngOnInit(): void {
  }

}
