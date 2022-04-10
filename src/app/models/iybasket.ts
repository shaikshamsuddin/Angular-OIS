export interface BasketItem {
    itemName: string
    itemvalue: number;
}
export interface IYDataContribution {
    dataValue: number;
    contributor: string;
    contributionDate: Date
}
export class Basket {
    investmentLOB: string | undefined;
    basketHeader: string | undefined;
    basketData: BasketItem[] = [];

    constructor(lob: string, headerName: string) {
        this.investmentLOB= lob;
        this.basketHeader = headerName;
    }

    addBasketData(name: string, value: number) {
        let basket: BasketItem = {
            itemName: name,
            itemvalue: value
        }
        try {
            this.basketData.push(basket);
            this.investmentLOB;
            this.basketHeader;
        } catch (error) {
            console.log('failed to add basket item: '+ name + ' for LOB:' + this.investmentLOB);
        } 
    }
}


