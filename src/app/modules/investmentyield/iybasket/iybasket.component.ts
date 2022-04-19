import { Component, OnInit } from '@angular/core';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';
import { Basket } from 'src/app/models/iybasket';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-iybasket',
  templateUrl: './iybasket.component.html',
  styleUrls: ['./iybasket.component.css']
})
export class IybasketComponent implements OnInit {
 public Baskets : Basket[] =[]; 
 selectedIndex: number | undefined;
 public BasketTableList : [] =[];
 public displayedColumns = ['itemName','itemvalue']
 public friendsStufs: [] =[];
 public fetchedValue : any;
 public indexRatesList : any;
 public dataSource : any;
  constructor(private _iyService: InvestmentYieldService) {

   }
   ngOnInit(): void {
    // this._iyService.loadData();
    this.Baskets = this._iyService.Baskets;
    this.fetchData();
    console.log(this.Baskets,"baskets");

  }

  expansionPanelIndex(index: number) { // Step 2
    this.selectedIndex = index;
  }
  public fetchData(){
    this._iyService.Baskets.forEach((data)=>{
    this.fetchedValue = data;
    this.indexRatesList = this.fetchedValue.basketData
    console.log(this.indexRatesList,'basketValues')
    })
  }
  
  // public dataSource = new MatTableDataSource<Basket>();

 

}
