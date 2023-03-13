import { Directive, OnInit, ViewContainerRef } from '@angular/core'
import { Store } from '@ngrx/store'
import { AppState } from '../../app-state/app-reducers/app.reducers'
import { LoaderSelectors } from './loader-state/selectors'
import { LoaderComponent } from './loader.component'

@Directive({
  selector: '[lorentzLoader]'
})
export class LoaderDirective implements OnInit {

  constructor (
    public readonly view: ViewContainerRef,
    public readonly store: Store<AppState>,
  ) { }

  ngOnInit (): void {
    this.store.select(LoaderSelectors.selectLoadersState).subscribe(n => {
      if(n){
        this.view.createComponent(LoaderComponent)
      }else {
        this.view.clear()
      }
    })
  }

}
