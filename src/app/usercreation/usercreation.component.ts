import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators ,FormBuilder,FormGroup} from '@angular/forms';
import { AutoSyncService } from '../../service';
import { ActivatedRoute,Router } from '@angular/router';
import { userCreation } from './modal';
type FormModel<T> = { [P in keyof T]: any };

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.component.html',
  styleUrls: ['./usercreation.component.css'],
  providers: [AutoSyncService]
})

export class UsercreationComponent implements OnInit {
  selectedValue: string;
  autoDeleteTime:number;
  private formBuilder: FormBuilder;
  supervisorList:[];
  roleList:[];
  userForm:FormGroup;
  constructor(public route:Router,private service: AutoSyncService ,private form: FormBuilder){}

  ngOnInit(): void {
    this.userForm = this.inputCreation();
    this.getMasterData();
  }

  getMasterData(){
    var self =this;
    this.service.getMasterData()
      .subscribe((result) => { 
        this.supervisorList = result.Data.Supervisors;
        this.roleList = result.Data.Roles;
      },
      (err) => {},
      () => { });
  }

  userSave(){
    this.service.SaveUser(this.userForm.value)
    .subscribe((result) => { 
     debugger;
    },
    (err) => {},
    () => { });
    // if(this.userForm.valid){
    //   debugger;

    // }
  }

  inputCreation(){
    const userDetails: FormModel<userCreation> ={
      Id:[0],
      RoleId :[0,Validators.min(1)],
      Username:['',Validators.required,Validators.maxLength(50)],
      Password:['',Validators.required,Validators.maxLength(20),Validators.minLength(8)],
      FolderFilePath:['',Validators.required,Validators.maxLength(150)],
      AutoSyncTime:['',Validators.required],
      DeviceId:['',Validators.required],
      SupervisorId:[0,Validators.min(1)],
      AutoSyncDays:[0,Validators.required],
      AutoDeleteInterval:[0,Validators.required]

    }
    return this.form.group(userDetails);;
  }
  


}
