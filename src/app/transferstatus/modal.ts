export interface transHistory {
  Id: number;
  Username:string;
  UserId: number;
  JobUniqueId: string,
  SourceFilePath: string,
  DestinationFilePath: string,
  TotalFileSize: string,
  Status: string,
  Reason: string,
  SyncType: string,
  CreatedDate: Date,
  SupervisorName:String,
  Excel: {
    Total: number,
    InProgress: number,
    Completed: number
  },
  Photos: {
    Total: number,
    InProgress: number,
    Completed: number
  }
 }

export class transHistoryFilter{
StartDate:Date;
EndDate:Date;
Search:String;
Page:number = 0;
PageSize:number = 1000;
}
