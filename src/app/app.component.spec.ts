import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './conponents/home/home.component';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Router } from '@angular/router'
import { routesConfig } from './app-routing.module';
import { CommonModule, Location } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core';




describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routesConfig),

        HttpClientModule,
        CommonModule,
        TranslateModule.forChild(),
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HomeComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.get(Router)
    location = TestBed.get(Location)
    fixture = TestBed.createComponent(AppComponent)
    router.initialNavigation()
  })

  it('navigate to "" redirects to /', fakeAsync(() => {
    router.navigate([''])
    tick()
    expect(location.path()).toBe('/')
  }))


  it('navigate to "login" redirects to /login', fakeAsync(() => {
    router.navigate(['login'])
    tick()
    expect(location.path()).toBe('/login')
  }))

  it('navigate to "search/:name" redirects to /search/:name', fakeAsync(() => {
    router.navigate(['search/aothun'])
    tick()
    expect(location.path()).toBe('/search/aothun')
  }))

  it('navigate to "**" redirects to /', fakeAsync(() => {
    router.navigate(['/aasdasd'])
    tick()
    expect(location.path()).toBe('/')
  }))
});

