import { Component, Inject, OnInit , inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder:FormBuilder, private toastr:ToastrService , private service: AuthService, private router:Router  , @Inject(MAT_DIALOG_DATA) public data:any , private dialog:MatDialogRef<UpdatepopupComponent>){}

  editdata:any;

  ngOnInit(): void {
      // throw new Error('Method not implemnted')
      this.service.GetAllRole().subscribe(res=>{
        this.rolelist=res;
      })

      if(this.data.usercode!= null && this.data.usercode!=''){    //usercode used from userlisting.component.ts file
        this.service.Getbycode(this.data.usercode).subscribe(res=>{
          this.editdata =res;
          this.registerform.setValue({id:this.editdata.id,name:this.editdata.name, email:this.editdata.email,password:this.editdata.password,role:this.editdata.role,gender:this.editdata.gender,isactive:this.editdata.isactive})
        });

      }                                                 
  }

  rolelist:any;

  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control('',Validators.required),
    isactive: this.builder.control(false)
  });

  updateuser(){
    if(this.registerform.valid){
      this.service.updateuser(this.registerform.value.id,this.registerform.value).subscribe(res=>{

        this.toastr.success('Update successfully.');
        this.dialog.close();
      });

    }else{
      this.toastr.warning('Please Select Role')
    }
  }
}
