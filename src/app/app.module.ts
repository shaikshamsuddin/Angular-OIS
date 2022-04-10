import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { SharedModule } from './shared/shared.module';
import { InvestmentyieldModule } from './modules/investmentyield/investmentyield.module';

@NgModule({
  declarations: [
    AppComponent,
    
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    SharedModule,
    InvestmentyieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
