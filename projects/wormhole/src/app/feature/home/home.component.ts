import { Component } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { TranslocoModule } from '@ngneat/transloco'
import { LorentzComponentsModule } from '../../../../../lorentz-components'

@Component({
  selector: 'wormhole-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    SharedModule,
    TranslocoModule,
    LorentzComponentsModule
  ],
  standalone: true
})
export class HomeComponent {

}
