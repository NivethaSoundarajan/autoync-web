import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  public pieChartLabels:string[] = ['No of Received Files', 'No of Reads', 'No of Bills','No of Images'];
  public pieChartData:number[] = [40, 20, 20 ,10];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    
  }
 
  public chartHovered(e:any):void {
    
  }
}

