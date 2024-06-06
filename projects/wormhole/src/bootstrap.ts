import { enableProdMode, LOCALE_ID } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import { provideRouter } from '@angular/router'
import { appRoutes } from './app/app-routing.module'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {
      provide: LOCALE_ID,
      useValue: window.localStorage.getItem('WORMHOLE_LOCALE') ?? 'en-US'
    }
  ]
}).catch(err => console.error(err))
