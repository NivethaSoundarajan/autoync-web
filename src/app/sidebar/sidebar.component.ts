import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/userlist', title: 'User Management',  icon:'groups', class: '' },
    //{ path: '/usercreation',title:'',icon:'',class:''},
    { path: '/transferstatus', title: 'Transfer status',  icon:'import_contacts', class: '' },
    // { path: '/imagestatus', title: 'Image Status',  icon:'', class: '' },
    { path: '/readings', title: 'Readings',  icon:'receipt', class: '' },
    { path: '/bills', title: 'Bills',  icon:'receipt', class: '' },
    // { path: '/accounthistory', title: 'Account History',  icon:'folder_shared', class: '' },
    // { path: '/qualityassurance', title: 'Quality Assurance',  icon:'how_to_reg', class: '' },
    //{ path: '/qualitycheck', title: 'Quality Check',  icon:'how_to_reg', class: '' },

    
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