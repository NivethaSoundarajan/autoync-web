import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormBuilder,FormGroup} from '@angular/forms';
import { AutoSyncService } from '../../service';
import { ActivatedRoute,Router } from '@angular/router';
import { userCreation } from './modal';
import {ToastService} from 'ng-uikit-pro-standard'
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
  isVisible:Boolean = true;
  id:number;
  label:string;
  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService,private form: FormBuilder,private toast: ToastService){}
  
  ngOnInit(): void {
    var self = this;
    this.getMasterData();
    this.route.paramMap.subscribe(params => {
      if (params.get('Id') != '0') {
        self.isVisible = params.get('visibility') == 'true' ? true : false ;
        self.getUserDetails(Number(params.get('Id')));
        self.id =Number(params.get('Id'));
        self.label = 'Update';
      }
      else{
        self.isVisible = params.get('visibility') == 'true' ? true : false ;
        self.label = 'Save';
        
      }
    });
    this.userForm = this.inputCreation();
    this.userForm.get('RoleId').valueChanges.subscribe(val => {
      this.userForm.patchValue({
        AutoDeleteInterval:0,
        AutoSyncDays: "",
        AutoSyncTime: "",
        DeviceId: "",
        FolderFilePath: "",
        Name: "",
        SupervisorId: 0,
        Id:this.id,
        // RoleId:val,
        Username:"",
        Password:""
     });
     debugger;
    });
  }

  getMasterData(){
    var self =this;
    this.service.getMasterData()
      .subscribe((result) => { 
        self.supervisorList = result.Data.Supervisors;
        self.roleList = result.Data.Roles;
      },  
      (err) => {
         self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
      },
      () => { });
  }

  getUserDetails(id:Number){
    var self =this;
    this.service.GetUserDetails(id)
      .subscribe((result) => { 
        var data = result.Data;
        self.userForm.patchValue(data);
        self.userForm.patchValue({
          AutoSyncDays: (data.AutoSyncDays == null) ? null : (data.AutoSyncDays).split(","),
          Username :data.Username,Name:data.Name,Password:data.Password,
          SupervisorId:data.SupervisorId,
          DeviceId:data.DeviceId
        });

      },
      (err) => {
         self.toast.error('Something Went Wrong...!', 'Error!', { opacity: 1 });
      },
      () => { });
  }

  userSave(){
    var self = this;
    this.userForm.value.AutoSyncDays = this.userForm.value.AutoSyncDays.toString();
    if(this.userForm.valid){
    this.service.SaveUser(this.userForm.value)
      .subscribe((result) => { 
        if(result.Status){
        self.toast.success( 'Saved Successfully!','Success!', { opacity: 1 });
        self.router.navigate(["/user-list"]);
        }
        else
        this.toast.error('Error!',result.Message, { opacity: 1 })
      },
      (err) => {
        this.toast.error('Error!',err.error.Message, { opacity: 1 })
      },
      () => { });
    }
  }

  inputCreation(){
    const userDetails: FormModel<userCreation> ={
      Id:[0],
      RoleId :[0,Validators.min(1)],
      Name:['',[Validators.maxLength(50)]],
      Username:['',[Validators.required,Validators.maxLength(50)]],
      Password:['',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
      FolderFilePath:['',[Validators.maxLength(150)]],
      AutoSyncTime:[''],
      DeviceId:[''],
      SupervisorId:[0],
      AutoSyncDays:[''],
      AutoDeleteInterval:[0],
      IsActive:[true]
    }
    return this.form.group(userDetails);;
  }
  
}
