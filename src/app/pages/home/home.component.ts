import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  CartService
} from '../../core/services';
import { Result } from '../../core/services/apiTypes'

interface Toast {
  message: string;
  id: number;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ApiService, CartService]
})

export class HomeComponent implements OnInit {
  products: Result[] = []
  isLoading: Boolean = false
  totalPages: number = 1
  currentPage: number = 1
  toasts: Toast[] = [];
  private toastId = 0;

  // Inyectar el servicio en el constructor
  constructor(private apiService: ApiService, private cartService: CartService) {}

  ngOnInit() {
    this.getProducts(this.currentPage);
  }

  async getProducts(page: number | string) {
    this.isLoading = true;
    this.apiService.getProducts(page).subscribe(
      (data) => {
        this.products = data.results;
        this.totalPages = data.pages;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    );
  }

  addToCart(product: Result) {
    this.cartService.addToCart(product)
    this.showToast(`${product.title} added to cart`)
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getProducts(this.currentPage)
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getProducts(this.currentPage)
    }
  }

  showToast(message: string) {
    const toast: Toast = { message, id: this.toastId++ };
    this.toasts.push(toast);
    if (this.toasts.length > 3) {
      this.toasts.shift();
    }
    setTimeout(() => {
      this.removeToast(toast.id);
    }, 3000);
  }

  removeToast(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  // resetPage() {
  //   this.currentPage = 1;
  //   this.getProducts(this.currentPage);
  // }

}
