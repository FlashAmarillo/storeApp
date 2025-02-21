
import { Injectable } from "@angular/core"
import { Result } from "./apiTypes"
import { BehaviorSubject } from 'rxjs'

interface CartItem {
  product: Result
  quantity: number
}


@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems: CartItem[] = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') as string) : [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  // añadir al carrito
  addToCart(product: Result) {
    if(!this.cartItems.find(item => item?.product?._id === product?._id)) {
      this.cartItems.push({product, quantity: 1})
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      this.cartSubject.next(this.cartItems)
    }
  }

  removeFromCart(product: Result) {
    if(this.cartItems.find(item => item?.product?._id === product?._id)) {
      this.cartItems = this.cartItems.filter(item => item.product._id !== product._id)
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      this.cartSubject.next(this.cartItems)
    }
  }

  clearCart() {
    localStorage.clear()
    this.cartItems = []
    this.cartSubject.next(this.cartItems)
  }

  addQuantity(product: Result) {
    const item = this.cartItems.find(item => item?.product?._id === product?._id)
    if (item) {
      item.quantity++
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      this.cartSubject.next(this.cartItems)
    }
  }

  removeQuantity(product: Result) {
    const item = this.cartItems.find(item => item.product._id === product._id)
    if (item && item.quantity > 1) {
      item.quantity--
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
      this.cartSubject.next(this.cartItems)
    }
  }
}

