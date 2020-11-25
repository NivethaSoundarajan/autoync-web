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
    CreatedDate: number,
    FileName:String,
    Excel: {
      Total: number,
      InProgress: number,
      Completed: number
    },  
    // Images: {
    //   Total: number,
    //   InProgress: number,
    //   Completed: number
    // }

   }
   