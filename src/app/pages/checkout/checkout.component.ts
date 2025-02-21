import { Component } from '@angular/core'
import { CartService } from '../../core/services'
import { Result } from '../../core/services/apiTypes'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers: [CartService]
})
export class CheckoutComponent {
  showPaymentGateway: boolean = false;
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.cartItems
  }

  get total() {
    return this.cartService.cartItems.reduce((acc, item) => acc + parseFloat(item?.product?.regular_price.toFixed(2)) * item.quantity, 0)
  }

  get quantityItems() {
    return this.cartService.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  }

  onSubmitPayment(event?: Event) {
    event?.preventDefault()
    // Aquí puedes añadir la lógica para procesar el pago
    console.log('Processing payment...')
    // Simular un proceso de pago
    setTimeout(() => {
      alert('Payment successful!')
      this.clearAllCart()
      this.showPaymentGateway = false;
    }, 2000)
  }

  addQuantity(product: Result) {
    this.cartService.addQuantity(product)
  }

  removeQuantity(product: Result) {
    this.cartService.removeQuantity(product)
  }

  removeFromCart(product: Result) {
    this.cartService.removeFromCart(product)
  }

  clearAllCart() {
    this.cartService.clearCart()
  }
}
