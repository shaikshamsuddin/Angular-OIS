import { Component, Input, OnInit, Output } from '@angular/core';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';
import { IYIndexRate } from 'src/app/models/iyindexrate';

@Component({
  selector: 'app-iyindexrate',
  templateUrl: './iyindexrate.component.html',
  styleUrls: ['./iyindexrate.component.css']
})

export class IyindexrateComponent implements OnInit {
  public Indexs : IYIndexRate[] =[]; 
  public fetchedValue : any;
  public indexRatesList : any;


  constructor(private _iyService: InvestmentYieldService) {

   }
   ngOnInit(): void {
    // this._iyService.loadData();
    // this.Indexs = this._iyService.IndexRates;
  this.fetchData();
      // return this.fetchedValue.push(data);
    
    console.log(this.fetchedValue,"indexes");
    
  }

  public fetchData(){
    this._iyService.IndexRates.forEach((data)=>{
    this.fetchedValue = data;
    this.indexRatesList = this.fetchedValue._indexRates
    console.log(this.indexRatesList)
    })
  }

}
