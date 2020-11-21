import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators ,FormBuilder,FormGroup} from '@angular/forms';
import { kMaxLength } from 'buffer';


interface Supervisor {
  value: string;
  viewValue: string;
}
interface UserRole {
  value: string;
  viewValue: string;
}
interface AutoSyncDay{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css']
})

export class UsercreationComponent implements OnInit {
  selectedValue: string;
  AutoDeleteTime:number;

  supervisor: Supervisor[] = [
    {value: '1', viewValue: 'kumar'},
    {value: '2', viewValue: 'kishore'},
    {value: '3', viewValue: 'ram'}
  ];
  userRole: UserRole[] = [
    {value: '1', viewValue: 'Admin'},
    {value: '2', viewValue: 'SuperAdmin'},
    {value: '3', viewValue: 'Supervisor'}
  ];
  autoSyncDay: AutoSyncDay[] = [
    {value: '1', viewValue: 'Admin'},
    {value: '2', viewValue: 'SuperAdmin'},
    {value: '3', viewValue: 'Supervisor'}
  ];
  private formBuilder: FormBuilder;
  userForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      UserRole :['',Validators.required],
      UserName:['',Validators.required,Validators.maxLength(50)],
      Password:['',Validators.required,Validators.maxLength(12),Validators.minLength(8)],
      FolderFilePath:['',Validators.required,Validators.maxLength(150)],
      AutoSyncTime:['',Validators.required],
      DeviceId:['',Validators.required],
      Supervisor:[0,Validators.required],
      AutoSyncDay:[0,Validators.required]
    })
  }

}
