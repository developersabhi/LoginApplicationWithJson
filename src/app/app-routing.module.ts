import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
    canActivate:[AuthGuard]    
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserlistingComponent,
    canActivate:[AuthGuard]
  }


  // {component:LoginComponent,path:'login'},
  // {component:RegisterComponent,path:'register'},
  // {component:HomeComponent,path:'',canActivate:[authGuard]},
  // {component:UserlistingComponent,path:'user',canActivate:[authGuard]},
  // {component:CustomerComponent
  //   ,path:'customer',canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
