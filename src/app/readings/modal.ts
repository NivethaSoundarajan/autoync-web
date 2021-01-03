export interface ReadsModel{
Id: number;
JobId: number;
AccountId: number;
AccountType: string;
ReadingDate: Date;
ReadingUnit: string;
HasImage: Boolean;
ImageName: string;
ReadingType: string;
Reason: string;
Remarks: string;
ReadFlag: Boolean;
IsApproved: Boolean;
}
export class readsFilter{
    StartDate:string;
    EndDate:string;
    Search:String;
    Page:number = 0;
    PageSize:number = 10;
  }
  