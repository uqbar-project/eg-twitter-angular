import { Component } from '@angular/core'

type ClaseEspacioRestante = 'pasado' | 'limite' | 'ok'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ejemplos-binding-angular'
  twitter = new Twitter('')

  espacioRestanteClass(): ClaseEspacioRestante {
    if (this.twitter.excedido()) {
      return 'pasado'
    }
    if (this.twitter.proximoAExcederse()) {
      return 'limite'
    }
    return 'ok'
  }
}

const MAXIMA_LONGITUD_TWITTER = 140
const DELTA_LONGITUD_MINIMA = 5

class Twitter {
  constructor(public texto = '') { }

  get cantidadLetrasRestantes() {
    return MAXIMA_LONGITUD_TWITTER - this.texto.length
  }

  excedido() {
    return this.cantidadLetrasRestantes <= 0
  }

  proximoAExcederse() {
    return this.cantidadLetrasRestantes <= DELTA_LONGITUD_MINIMA
  }
}
