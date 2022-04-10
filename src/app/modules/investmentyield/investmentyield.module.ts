import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { InvestmentyieldComponent } from './investmentyield.component';
import { IyheaderComponent } from './iyheader/iyheader.component';
import { IycontributionComponent } from './iycontribution/iycontribution.component';
import { IyindexrateComponent } from './iyindexrate/iyindexrate.component';
import { IybasketComponent } from './iybasket/iybasket.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IyworkstreamComponent } from 'src/app/widgets/iyworkstream/iyworkstream.component';


@NgModule({
  declarations: [
    InvestmentyieldComponent, 
    IyheaderComponent, 
    IycontributionComponent, 
    IyindexrateComponent, 
    IybasketComponent,
    IyworkstreamComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class InvestmentyieldModule { }
