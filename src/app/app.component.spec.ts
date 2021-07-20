import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing'

import { AppComponent } from './app.component'

let fixture: ComponentFixture<AppComponent>

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
  }))

  it('should decrease letters - greater than 0', waitForAsync(() => {
    twittear('En todos lados se cuecen habas')
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(buscarElemento('restantes').textContent).toContain('110')
    })
  }))

  it('should decrease letters - exactly 0', waitForAsync(() => {
    twittear('12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890')
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(buscarElemento('restantes').textContent).toContain('0')
      expect(fixture.componentInstance.twitter.excedido).toBeTruthy()
    })
  }))

  /* Función auxiliar que permite buscar un elemento por data-testid */
  function buscarElemento(testId: string) {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  function twittear(tweet: string) {
    const twitter = fixture.componentInstance.twitter
    twitter.texto = tweet
    const inputTexto = buscarElemento('texto')
    inputTexto.value = twitter.texto    
    return twitter
  }
})
