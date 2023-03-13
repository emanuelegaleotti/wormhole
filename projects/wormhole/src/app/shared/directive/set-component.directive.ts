import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core'
import { loadRemoteModule } from '@angular-architects/module-federation'

@Directive({
  selector: '[lorentzSetComponent]'
})
export class SetComponentDirective implements OnInit {
  @Input() lorentzSetComponent: string = ''
  @Input() remoteUrl: string = ''
  @Input() remoteName: string = ''

  constructor (
    private readonly view: ViewContainerRef
  ) { }

  ngOnInit (): void {
    this.loadComponent()
  }

  loadComponent (): void {
    loadRemoteModule({
      remoteEntry: this.remoteUrl,
      exposedModule: './Component',
      remoteName: this.remoteName
    }).then(c => {
      this.view.createComponent(c[`${this.lorentzSetComponent}`])
    })
  }
}
