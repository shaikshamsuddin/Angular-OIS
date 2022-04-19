export interface IYDataItem {
    id: number; //dbid for the workstream datapoint
    streamId: number; //fkey
    dataKey: string //pipe-delimited key
    keyDescription: string;
}

export interface IYContributor {
    id: number; //dbid streamid
    streamName: string;
    primaryContributor: string;
    delegateContributor: string;
    emailaddress: string; //email-addresses, DL of recipients for notification; required for admin to trigger notification
    creationDate: Date
    createdBy: string;
}

export interface IYDataContribution {
    dataItem: IYDataItem;
    dataValue: number;
    contributor: string;
    contributionDate: Date
}

export class IYWorkStream {
    private stream: IYContributor;
    private streamData: IYDataContribution[] = [];
    private valueDataPt: number = 0;
    private totalDataPt: number = 0;
    private pctComplete: number = 0;

    constructor() {
        this.stream = { id: 0,streamName: '', primaryContributor: '', delegateContributor: '', emailaddress: '', creationDate: new Date(), createdBy: '' } ;
        this.streamData = [];
    }

    loadWorkStream(id:number, name:string, primary:string, secondary:string, email:string, created:Date, creator:string) {
        this.stream.id = id;
        this.stream.streamName = name;
        this.stream.primaryContributor = primary;
        this.stream.delegateContributor = secondary;
        this.stream.emailaddress = email;
        this.stream.creationDate = created;
        this.stream.createdBy = creator;
    }
    loadWorkStreamData(id:number, sid:number, key:string, desc:string, keyval:number, enteredby:string, entrydate:Date) {
        let dp: IYDataItem = {
            id: id,
            streamId: sid,
            dataKey: key,
            keyDescription: desc
        }
        
        let contrib: IYDataContribution = {
            dataItem: dp,
            dataValue: keyval,
            contributor: enteredby,
            contributionDate: entrydate
        }

        try {
            this.streamData.push(contrib);
            this.totalDataPt += 1;
            if(keyval != Number.MAX_SAFE_INTEGER) {
                this.valueDataPt += 1;
            }
            this.pctComplete = this.valueDataPt/this.totalDataPt;
        } catch (error) {
            console.log('failed to load stream data:: stream-name:' + this.stream.streamName + ' description:' + desc + ' value: ' + keyval);
        }
    }

    get StreamId(): number {
        return this.stream.id;
    }
    get StreamName(): string {
        return this.stream.streamName;
    }

    get StreamData(): IYDataContribution[] {
        return this.streamData;
    }

    get PercentCompleted(): string {
        return (this.pctComplete * 100) + '%';
    }

    get Completed(): number {
        return this.pctComplete * 100;
    }

    get TotalDataPoints(): number {
        return this.totalDataPt;
    }

    get ValuedDataPoints(): number {
        return this.valueDataPt;
    }
}