import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TwitterSignalsComponent } from './twitter-signals.component'

describe('TwitterSignalsComponent', () => {
  let fixture: ComponentFixture<TwitterSignalsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterSignalsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TwitterSignalsComponent)
    fixture.detectChanges()
  })

  it('should decrease letters - greater than 0', () => {
    twittear('En todos lados se cuecen habas')
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('110')
    expect(buscarElemento('restantes')?.classList).toContain('ok')
  })

  it('should decrease letters - exactly 0', () => {
    twittear(
      '1234567890'.repeat(14)
    )
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('0')
    expect(buscarElemento('restantes')?.classList).toContain('pasado')
  })

  /* Función auxiliar que permite buscar un elemento por data-testid */
  function buscarElemento(testId: string): HTMLInputElement {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  function twittear(tweet: string) {
    const inputTexto = buscarElemento('texto')
    inputTexto.value = tweet
    inputTexto.dispatchEvent(new InputEvent('input', { data: tweet }))
    //

    // Dispara el data binding de Angular
    fixture.detectChanges()
  }
})
