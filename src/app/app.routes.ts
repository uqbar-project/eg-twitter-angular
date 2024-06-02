import { Routes } from '@angular/router'
import { TwitterTemplateComponent } from './twitter-template/twitter-template.component'
import { TwitterSignalsComponent } from './twitter-signals/twitter-signals.component'

export const routes: Routes = [
    { path: 'signals', component: TwitterSignalsComponent },
    { path: '**', component: TwitterTemplateComponent },
]
