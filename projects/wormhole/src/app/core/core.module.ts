import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { AsideComponent } from './aside/aside.component'
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [HomeComponent, AsideComponent, HeaderComponent],
  exports: [HeaderComponent, AsideComponent],
  imports: [CommonModule]
})
export class CoreModule {}
