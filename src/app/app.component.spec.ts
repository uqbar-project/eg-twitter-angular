
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'

import { AppComponent } from './app.component'
import './app.module'
import { FormsModule } from '@angular/forms'

let appComponent: ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents()
    appComponent = TestBed.createComponent(AppComponent)
  })

  it('should decrease letters - greater than 0', () => {
    twittear('En todos lados se cuecen habas')
    appComponent.detectChanges()
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('110')
  })

  it('should decrease letters - exactly 0', () => {
    twittear('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')
    // Dispara el data binding de Angular
    appComponent.detectChanges()
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('0')
    expect(appComponent.componentInstance.tweet.excedido).toBeTruthy()
  })

  /* Función auxiliar que permite buscar un elemento por data-testid */
  function buscarElemento(testId: string): HTMLInputElement {
    const compiled = appComponent.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  function twittear(tweet: string) {
    const inputTexto = buscarElemento('texto')
    inputTexto.value = tweet
    // Necesario para que funcione
    appComponent.componentInstance.tweet.texto = tweet
    //
    inputTexto.dispatchEvent(new Event('input'))
  }
})
