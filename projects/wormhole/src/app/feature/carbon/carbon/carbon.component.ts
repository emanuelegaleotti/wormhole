import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CarbonService } from '../carbon.service'

@Component({
  selector: 'wormhole-carbon',
  templateUrl: './carbon.component.html',
  styleUrls: ['./carbon.component.scss']
})
export class CarbonComponent {
  siteForm: FormGroup = new FormGroup({
    site: new FormControl('', [Validators.required])
  })
  carbonData: any

  constructor (
    private readonly carbonService: CarbonService
  ) { }

  getCarbon (): void {
    this.carbonService.getCarbonImpact(
      this.siteForm.controls['site'].value
    ).subscribe(r => {
      this.carbonData = r
    })
  }

}
