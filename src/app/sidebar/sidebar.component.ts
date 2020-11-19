import { Component, OnInit } from '@angular/core';


declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/userlist', title: 'User Management',  icon:'person', class: '' },
    //{ path: '/usercreation',title:'',icon:'',class:''},
    { path: '/transferstatus', title: 'Transfer status',  icon:'person', class: '' },
    // { path: '/imagestatus', title: '',  icon:'', class: '' },
    
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