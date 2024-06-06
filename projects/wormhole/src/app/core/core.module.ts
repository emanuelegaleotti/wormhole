import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AsideComponent } from './aside/aside.component'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { LoaderComponent } from './loader/loader.component';
import { TranslocoModule } from '@ngneat/transloco'
import { ReactiveFormsModule } from '@angular/forms';
import { LocaleSelectorComponent } from './footer/locale-selector/locale-selector.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    LoaderComponent,
    LocaleSelectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    TranslocoModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
