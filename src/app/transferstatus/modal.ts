export interface transHistory {
    Id: number;
    UserId:number,
    JobUniqueId: string,
    SourceFilePath: string,
    DestinationFilePath: string,
    TotalFileSize: string,
    Status: string,
    Reason: string,
    SyncType: string,
    Excel: {
      Total: number,
      InProgress: number,
      Completed: number
    },
    Images: {
      Total: number,
      InProgress: number,
      Completed: number
    }
   }
   