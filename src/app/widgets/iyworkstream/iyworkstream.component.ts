import { Component, Input, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { InvestmentYieldService } from 'src/app/services/investmentyield.service';

@Component({
  selector: 'app-iyworkstream',
  templateUrl: './iyworkstream.component.html',
  styleUrls: ['./iyworkstream.component.css']
})
export class IyworkstreamComponent implements OnInit {

  @Input() wsid: number = 0;
  @Input() workstream: string | undefined;
  @Input() wsCompleted: number=0;
  @Input() wsTotal: number=0;
  @Input() wsPctComplete: string | undefined;
  wsColor: ThemePalette = 'accent';

  wsMode: ProgressBarMode = 'determinate';

  constructor(private _iyService: InvestmentYieldService) { }

  ngOnInit(): void {
    this.wsColor = (this.wsCompleted == 100) ? 'primary' : 'accent';
  }

  streamSelected() {
    this._iyService.NotifyWorkStreamSelected(this.wsid);
  }

}
