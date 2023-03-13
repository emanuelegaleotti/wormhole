import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { AsideComponent } from './aside/aside.component'
import { RouterModule } from '@angular/router'
import { NotFoundComponent } from './not-found/not-found.component'
import { SharedModule } from '../shared/shared.module';
import { LoaderDirective } from './loader/loader.directive';
import { LoaderComponent } from './loader/loader.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    NotFoundComponent,
    LoaderDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    LoaderDirective
  ]
})
export class CoreModule { }
