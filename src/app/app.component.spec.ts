import { TestBed } from '@angular/core/testing'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { AppComponent } from './app.component'
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router'
import { provideHttpClient } from '@angular/common/http'
import { of } from 'rxjs'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        AppComponent,
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: { paramMap: { get: () => null } }
          }
        }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it(`should have the 'storeApp' title on navbar`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('storeApp');
  })

  it('should render the search button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Search');
  })

  it('should render 2 navigation links', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    console.log(compiled.querySelectorAll('a'));
    expect(compiled.querySelectorAll('li').length).toEqual(2);
  })

});
