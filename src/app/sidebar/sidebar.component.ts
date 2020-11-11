import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/dash-overview', title: 'Overview',  icon:'person', class: '' },
    //{ path: '/usercreation',title:'',icon:'',class:''},
    { path: '/transferstatus', title: 'Transferstatus',  icon:'person', class: '' },
    // { path: '/imagestatus', title: '',  icon:'', class: '' },
    { path: '/readings', title: 'Readings',  icon:'bubble_chart', class: '' },
    // { path: '/accounthistory', title: 'Account History',  icon:'person', class: '' },
    { path: '/qualityassurance', title: 'Quality Assurance',  icon:'notifications', class: '' },
    // { path: '/qualitycheck', title: 'Quality Check',  icon:'person', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
}