import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormBuilder,FormGroup} from '@angular/forms';
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
  Days= new FormControl();
  AutoSyncDaysList: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
  selectedValue: string;
  autoDeleteTime:number;
  private formBuilder: FormBuilder;
  supervisorList:[];
  roleList:[];
  userForm:FormGroup;
  isVisible:Boolean;
  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService,private form: FormBuilder){}
  
  ngOnInit(): void {
    var self = this;
    this.userForm = this.inputCreation();
    this.getMasterData();
    this.route.paramMap.subscribe(params => {
      if (params.get('Id') != '0') {
        debugger;
        self.getUserDetails(Number(params.get('Id')));
        self.isVisible = Boolean(params.get('visibility'));
      }});
    this.userForm.get('RoleId').valueChanges.subscribe(val => {
      this.userForm.setValue({
        AutoDeleteInterval:0,
        AutoSyncDays: "",
        AutoSyncTime: "",
        DeviceId: "",
        FolderFilePath: "",
        Name: "",
        SupervisorId: 0
     });
    });
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

  getUserDetails(id:Number){
    var self =this;
    this.service.GetUserDetails(id)
      .subscribe((result) => { 
        var data = result.Data;
        this.userForm.setValue({
          AutoDeleteInterval:data.AutoDeleteInterval,
          AutoSyncDays: (data.AutoSyncDays).split(","),
          AutoSyncTime: data.AutoSyncTime,
          DeviceId: data.DeviceId,
          FolderFilePath: data.FolderFilePath,
          Id: data.Id,
          Name: data.Name,
          Password: data.Password,
          RoleId: data.RoleId,
          SupervisorId: data.SupervisorId,
          Username: data.Username
       });
      },
      (err) => {},
      () => { });
  }

  userSave(){
    debugger;
    this.userForm.value.AutoSyncDays = this.userForm.value.AutoSyncDays.toString();
    // if(this.userForm.valid){
    // this.service.SaveUser(this.userForm.value)
    //   .subscribe((result) => { 
    //   debugger;
    //   },
    //   (err) => {},
    //   () => { });
    // }
  }

  inputCreation(){
    const userDetails: FormModel<userCreation> ={
      Id:[0],
      RoleId :[0,Validators.min(1)],
      Name:['',[Validators.required,Validators.maxLength(50)]],
      Username:['',[Validators.required,Validators.maxLength(50)]],
      Password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]],
      FolderFilePath:['',[Validators.required,Validators.maxLength(150)]],
      AutoSyncTime:['',Validators.required],
      DeviceId:['',Validators.required],
      SupervisorId:[0,Validators.min(1)],
      AutoSyncDays:['',Validators.required],
      AutoDeleteInterval:[0,Validators.required]

    }
    return this.form.group(userDetails);;
  }
  


}
