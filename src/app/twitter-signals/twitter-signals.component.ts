import { Component, computed, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-twitter-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twitter-signals.component.html',
  styleUrl: './twitter-signals.component.css'
})
export class TwitterSignalsComponent {
  texto = signal<string>('')

  cantidadLetrasRestantes = computed<number>(
    () => MAXIMA_LONGITUD_TWEET - this.texto().length
  )

  espacioRestanteClass = computed<ClaseEspacioRestante>(() => {
    const cantidadRestante = this.cantidadLetrasRestantes()
    if (cantidadRestante <= 0) {
      return 'pasado'
    }
    if (cantidadRestante <= DELTA_LONGITUD_MINIMA_TWEET) {
      return 'limite'
    }
    return 'ok'
  })
}

const MAXIMA_LONGITUD_TWEET = 140
const DELTA_LONGITUD_MINIMA_TWEET = 5

type ClaseEspacioRestante = 'pasado' | 'limite' | 'ok'
