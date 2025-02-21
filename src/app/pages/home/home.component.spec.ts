import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideHttpClientTesting  } from '@angular/common/http/testing'

import { HomeComponent } from './home.component'
import { ApiService, CartService } from '../../core/services'
import { provideHttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ HomeComponent],
      providers:[
        ApiService,
        CartService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })


  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should show a spinner when loading', () => {
    component.isLoading = true
    fixture.detectChanges()
    const spinner = fixture.nativeElement.querySelector('.spinner')
    expect(spinner).toBeTruthy()
  });

  it('should show title when not loading', () => {
    component.isLoading = false
    fixture.detectChanges()
    const title = fixture.nativeElement.querySelector('h1')
    expect(title.textContent).toContain('Products')
  })

  it('should show the products when not loading', () => {
    component.isLoading = false
    fixture.detectChanges()
    const products = fixture.nativeElement.querySelectorAll('.product-card')
    expect(products.length).toBeGreaterThanOrEqual(0)
  });

  it('should show the pagination when not loading', () => {
    component.isLoading = false
    fixture.detectChanges()
    const pagination = fixture.nativeElement.querySelector('.pagination')
    expect(pagination).toBeTruthy()
  });

});
