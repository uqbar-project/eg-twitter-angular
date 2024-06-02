import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TwitterTemplateComponent } from './twitter-template.component'

describe('TwitterTemplateComponent', () => {
  let fixture: ComponentFixture<TwitterTemplateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitterTemplateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TwitterTemplateComponent)
    fixture.detectChanges()
  })

  it('should initially have normal limit and empty string', () => {
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('140')
    expect(fixture.componentInstance.tweet.texto).toBe('')
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
    expect(fixture.componentInstance.tweet.excedido).toBeTruthy()
  })

  it('should decrease letters - close to exceeded', () => {
    twittear(
      '1234567890'.repeat(13).concat('111111')
    )
    expect(buscarElemento('restantes')?.textContent?.trim()).toBe('4')
    expect(buscarElemento('restantes')?.classList).toContain('limite')
  })

  /* Función auxiliar que permite buscar un elemento por data-testid */
  function buscarElemento(testId: string): HTMLInputElement {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  function twittear(tweet: string) {
    const inputTexto = buscarElemento('texto')
    inputTexto.value = tweet
    inputTexto.dispatchEvent(new Event('input'))
    // Dispara el data binding de Angular
    fixture.detectChanges()
  }
})
