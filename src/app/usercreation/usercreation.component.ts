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
  constructor(private router: Router, private route: ActivatedRoute,private service: AutoSyncService,private form: FormBuilder,private toast: ToastService){}
  
  ngOnInit(): void {
    var self = this;
    this.getMasterData();
    this.route.paramMap.subscribe(params => {
      if (params.get('Id') != '0') {
        self.isVisible = params.get('visibility') == 'true' ? true : false ;
        self.getUserDetails(Number(params.get('Id')));
        self.id =Number(params.get('Id'));
      }});
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
    });
  }

  getMasterData(){
    var self =this;
    this.service.getMasterData()
      .subscribe((result) => { 
        this.supervisorList = result.Data.Supervisors;
        this.roleList = result.Data.Roles;
      },  
      (err) => {
        this.toast.error('Error!', 'Something Went Wrong!', { opacity: 1 });
      },
      () => { });
  }

  getUserDetails(id:Number){
    var self =this;
    this.service.GetUserDetails(id)
      .subscribe((result) => { 
        var data = result.Data;
        this.userForm.patchValue({
          AutoDeleteInterval:data.AutoDeleteInterval,
          AutoSyncDays: (data.AutoSyncDays == null) ? null : (data.AutoSyncDays).split(","),
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
      (err) => {
        this.toast.error('Error!', 'Something Went Wrong!', { opacity: 1 });
      },
      () => { });
  }

  userSave(){
    var self = this;
    this.userForm.value.AutoSyncDays = this.userForm.value.AutoSyncDays.toString();
    if(this.userForm.valid){
    this.service.SaveUser(this.userForm.value)
      .subscribe((result) => { 
        debugger;
        self.toast.success('Success!', 'Saved Successfully!', { opacity: 1 });
        self.router.navigate(["/user-list"]);
      },
      (err) => {
        this.toast.error('Error!', 'Something Went Wrong!', { opacity: 1 })
      },
      () => { });
    }
  }

  inputCreation(){
    const userDetails: FormModel<userCreation> ={
      Id:[0],
      RoleId :[{value:0,disabled:this.isVisible},Validators.min(1)],
      Name:[{value:'',disabled:this.isVisible},[Validators.required,Validators.maxLength(50)]],
      Username:[{value:'',disabled:this.isVisible},[Validators.required,Validators.maxLength(50)]],
      Password:[{value:'',disabled:this.isVisible},[Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
      FolderFilePath:[{value:'',disabled:this.isVisible},[Validators.required,Validators.maxLength(150)]],
      AutoSyncTime:[{value:'',disabled:this.isVisible},Validators.required],
      DeviceId:[{value:'',disabled:this.isVisible}],
      SupervisorId:[{value:0,disabled:this.isVisible},Validators.min(1)],
      AutoSyncDays:[{value:'',disabled:this.isVisible},Validators.required],
      AutoDeleteInterval:[{value:0,disabled:this.isVisible},Validators.required]

    }
    return this.form.group(userDetails);;
  }
  


}
