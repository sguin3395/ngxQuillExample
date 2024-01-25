import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;  

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        QuillModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        QuillModule.forRoot().providers
      ],
      schemas: [
          NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);    
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it(`should have as title 'dummyApp'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dummyApp');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('dummyApp app is running!');
  // });
});
