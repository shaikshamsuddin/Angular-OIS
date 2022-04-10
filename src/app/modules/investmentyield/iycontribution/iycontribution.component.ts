import { Component, Input, OnInit } from '@angular/core';
import { IYWorkStream } from 'src/app/models/investmentyield';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';

@Component({
  selector: 'app-iycontribution',
  templateUrl: './iycontribution.component.html',
  styleUrls: ['./iycontribution.component.css']
})
export class IycontributionComponent implements OnInit {
  basketStatus = 'Pending';
  dcColor = 'accent';
  streamtotal = 100;
  selectedWorkStream: string | undefined;
  workStreams: IYWorkStream[] = [];

  constructor(private _iyService: InvestmentYieldService) {
    this._iyService.SelectedWorkStream$.subscribe((workStreamId: number) => {
      this.selectedWorkStream = this._iyService.getWorkStreamName(workStreamId);
    })
   }

  ngOnInit(): void {
    this.selectedWorkStream = '(select data contribution item)';
    this._iyService.loadData();

    this.workStreams = this._iyService.WorkStreams;
    console.log(this.workStreams,"workStreams")
  }

  get PctComplete() {
    this.dcColor = (this._iyService.PercentCompleted == 100) ?'primary':'accent';
    return this._iyService.PercentCompleted;
  }

}
