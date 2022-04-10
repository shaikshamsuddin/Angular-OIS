import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IYWorkStream } from '../models/investmentyield';
import { Basket } from '../models/iybasket';
import { IYIndexRate } from '../models/iyindexrate';

@Injectable({
  providedIn: 'root'
})
export class InvestmentYieldService {
  //Data contributions
  private workStreams: IYWorkStream[] = [];
  private _totalDataPoints: number = 0;
  private _valuedDataPoints: number = 0;
  private _selectedWorkStream = new BehaviorSubject<number>(0);
  SelectedWorkStream$ = this._selectedWorkStream.asObservable();
  // private _basketsList = new BehaviorSubject<number>(0);
  //  BasketsData$ = this._basketsList.asObservable();
  //Basket
  private _baskets: Basket[] = [];

  //Index Rates
  private _indexes: IYIndexRate[] = [];

  constructor() { }

  loadData() {
    //load from the database

    //load mock data
    this.loadMockData();
    this.loadMockBasketData();
    this.loadMockIndexes();
  }

  private loadMockData() {
    let ws = new IYWorkStream();
    ws.loadWorkStream(1, "Mackay Shields", "Jacob", "Thomas", "jacob_thomas@nylim.com", new Date(), "system");
    ws.loadWorkStreamData(1, 1, "k1", "key1", 3.56, "", new Date());
    ws.loadWorkStreamData(2, 1, "k1", "key2", 0, "", new Date());
    this.workStreams.push(ws);
    this._totalDataPoints += ws.TotalDataPoints;
    this._valuedDataPoints += ws.ValuedDataPoints;

    let ws1 = new IYWorkStream();
    ws1.loadWorkStream(2, "Tenor", "Jacob", "Thomas", "jacob_thomas@nylim.com", new Date(), "system");
    ws1.loadWorkStreamData(1, 2, "k1", "key1", 3, "Jacob", new Date());
    ws1.loadWorkStreamData(2, 2, "k1", "key2", 10, "", new Date());
    ws1.loadWorkStreamData(2, 2, "k1", "key3", Number.MAX_SAFE_INTEGER, "", new Date());
    this.workStreams.push(ws1);
    this._totalDataPoints += ws1.TotalDataPoints;
    this._valuedDataPoints += ws1.ValuedDataPoints;
  }

  private loadMockBasketData() {
    let b1 = new Basket("ANNUITY", "Net Investable Yield");
    b1.addBasketData("Fixed Deferred Annuity", 0.0262);
    b1.addBasketData("Variable Deferred Annuity", 0.028);
    b1.addBasketData("Guaranteed Income Annuities", 0.0286);
    b1.addBasketData("Payout Annuity Participating Corp.", 0.0289);
    b1.addBasketData("Structured Settlements", 0.0287);
    this._baskets.push(b1);

    let b2 = new Basket("US LIFE LINES", "Gross Investable Yield");
    b2.addBasketData("OL-Post", 0.0341);
    b2.addBasketData("OL-Pre", 0.034);
    b2.addBasketData("Universal Life - Retail", 0.0337);
    b2.addBasketData("Universal Life - Inst.", 0.0339);
    b2.addBasketData("Universal Life - New Money", 0.034);
    b2.addBasketData("Long Term Care", 0.0346);
    b2.addBasketData("JH Closed", 0.0305);
    this._baskets.push(b2);

    let b3 = new Basket("ENTERPRISES", "Gross Investable Yield");
    b3.addBasketData("AARP", 0.0345);
    b3.addBasketData("AARP-LIP", 0.0295);
    b3.addBasketData("Membership", 0.0336);
    this._baskets.push(b3);

    let b4 = new Basket("BOLI", "Gross Investable Yield");
    b4.addBasketData("BOLI Quality", 0.0251);
    b4.addBasketData("BOLI Yield", 0.0313);
    b4.addBasketData("BOLI Yield Plus", 0.0313);
    b4.addBasketData("BOLI Tracking 5 dur", 0.0273);
    b4.addBasketData("BOLI Tracking 7 dur", 0.0301);
    this._baskets.push(b4);

    let b5 = new Basket("SMA", "Gross Investable Yield");
    b5.addBasketData("NYLIC SMA", 0.0288);
    b5.addBasketData("NYLIAC SMA", 0.0295);
    b5.addBasketData("NYLIC SMA CMS", 0.0288);
    b5.addBasketData("NYLIAC SMA CMS", 0.0289);
    this._baskets.push(b5);
  }

  private loadMockIndexes() {
    let idxrt = new IYIndexRate( new Date(2022, 2, 4));
    idxrt.addIndex("SBBIG Index", 1882);
    idxrt.addIndex("INDU Index", 35090);
    idxrt.addIndex("CCMP Index", 14098);
    idxrt.addIndex("SPX Index", 4501);
    idxrt.addIndex("J0A0 Index", 2182);
    this._indexes.push(idxrt);
  }

  get WorkStreams() {
    return this.workStreams;
  }

  get PercentCompleted() {
    return (100 * (this._valuedDataPoints/this._totalDataPoints));
  }

  getWorkStreamName(id: number) {
    let streamName = '';
    var ws = this.workStreams.find((x) => x.StreamId == id);

    if(ws != undefined) {
      streamName = ws.StreamName;
    }
    return streamName;
  }

  

  NotifyWorkStreamSelected(workStreamId:number) {
    this._selectedWorkStream.next(workStreamId);
  }

  get Baskets() {
    return this._baskets;
  }

  get IndexRates() {
    return this._indexes;
  }
}
