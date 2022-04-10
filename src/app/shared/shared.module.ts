import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent, 
    SidebarComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
