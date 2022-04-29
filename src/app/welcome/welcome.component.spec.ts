import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let store: MockStore;
  const initialState = { authentication: false };
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the store', () => {
    expect(store).toBeTruthy();
  });

  it('should not be authenticated when app opens', () => {
    store.select('authentication').subscribe((authentication) => {
      expect(authentication).toBeFalse();
    });
  });
});
