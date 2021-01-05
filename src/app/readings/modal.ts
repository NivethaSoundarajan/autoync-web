export interface ReadsModel{
  JobId: Date;
  UserId: string;
  AccountNo: string;
  MeterNo: "";
  Source: string,
  ReadingValue:number;
  ReadingDate: number;
  Reason: string;
  HasImage: boolean;
  HasReadImage: boolean;
  ImageName: string;
  ReadType: string;
  ReadFlag: number;
  Remarks: "";
  Approved: boolean;
}
export class readsFilter{
    StartDate:string;
    EndDate:string;
    Search:String;
    Page:number = 0;
    PageSize:number = 10;
  }
  