import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login.component';

import { AuthService } from '../auth.gaurds';

const routes: Routes = [
    {path: '', component: LoginComponent, canActivate: [AuthService]}
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    declarations:[
        LoginComponent
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {}