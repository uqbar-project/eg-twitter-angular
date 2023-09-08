import { Component } from '@angular/core'

type ClaseEspacioRestante = 'pasado' | 'limite' | 'ok'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ejemplos-binding-angular'
  tweet = new Tweet('')

  espacioRestanteClass(): ClaseEspacioRestante {
    if (this.tweet.excedido()) {
      return 'pasado'
    }
    if (this.tweet.proximoAExcederse()) {
      return 'limite'
    }
    return 'ok'
  }
}

const MAXIMA_LONGITUD_TWEET = 140
const DELTA_LONGITUD_MINIMA_TWEET = 5

class Tweet {
  constructor(public texto = '') { }

  get cantidadLetrasRestantes() {
    return MAXIMA_LONGITUD_TWEET - this.texto.length
  }

  excedido() {
    return this.cantidadLetrasRestantes <= 0
  }

  proximoAExcederse() {
    return this.cantidadLetrasRestantes <= DELTA_LONGITUD_MINIMA_TWEET
  }
}
