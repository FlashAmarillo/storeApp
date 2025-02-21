import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting  } from '@angular/common/http/testing'
import { CheckoutComponent } from './checkout.component'
import { provideHttpClient } from '@angular/common/http'
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CartService } from '../../core/services';
import { of } from 'rxjs';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CheckoutComponent,
      ],
      providers: [
        RouterLink,
        CartService,
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: { paramMap: { get: () => null } }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Your cart is empty" if there are no items in the cart', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Your storeApp Cart is empty')
  })


});
