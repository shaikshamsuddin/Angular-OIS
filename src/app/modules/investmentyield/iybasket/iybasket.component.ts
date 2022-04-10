import { Component, OnInit } from '@angular/core';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';
import { Basket } from 'src/app/models/iybasket';

@Component({
  selector: 'app-iybasket',
  templateUrl: './iybasket.component.html',
  styleUrls: ['./iybasket.component.css']
})
export class IybasketComponent implements OnInit {
 public Baskets : Basket[] =[];
  constructor(private _iyService: InvestmentYieldService) {

   }
   ngOnInit(): void {
    // this._iyService.loadData();
    this.Baskets = this._iyService.Baskets;
    console.log(this.Baskets,"baskets")

  }

  displayedColumns: string[] = ['business', 'net'];


 


}
