import { Component, Input, OnInit, Output } from '@angular/core';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';

export interface BasketsList {
  business: string;
  net: number;
}

const ELEMENT_DATA: BasketsList[] = [
  {business: 'Fixed Diferred Annuity', net: 2.62},
  {business: 'Variable Diferred Annuity', net: 2.87},
  {business: 'Fixed Diferred Annuity', net: 2.62},

  {business: 'Fixed Diferred Annuity', net: 2.62},

  {business: 'Fixed Diferred Annuity', net: 2.62},



];
@Component({
  selector: 'basketstable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['business', 'net'];
  dataSource = ELEMENT_DATA;
  constructor(private _iyService: InvestmentYieldService) { }


  ngOnInit(): void {
  }

}
