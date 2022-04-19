export interface IndexRate {
    indexName: string;
    indexValue: number;
}

export class IYIndexRate {
    [x: string]: any;
    private _indexDate: Date | undefined;
    private _indexRates: IndexRate[] = [];

    constructor(idxDate: Date) {
        this._indexDate = idxDate ;
    }
    addIndex(name: string, value: number) {
        let idx: IndexRate = {
            indexName: name,
            indexValue: value
        }
         
        try {
            this._indexRates.push(idx)
        } catch (error) {
            console.log('failed to add index-rate: '+ name);
        }
    }
}