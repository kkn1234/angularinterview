import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login_Module/login.module';

const routes: Routes = [
    {path: '', redirectTo: 'login'}
    {path: 'login', loadChildren: './login_Module/login.module#LoginModule'}
]

@NgModule({
    imports:[
        LoginModule,
        RouterModule.forRoot(routes)
    ],
    declarations:[
        
    ],
    providers: [],
    exports: [
        RouterModule
    ]
})

export class LoginRoutingModule {}