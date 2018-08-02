import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './services/login.service';
import { LoginComponent } from './component/login.component';
import { SearchComponent } from './searchComponent/search.component';
import { AuthService } from '../auth.gaurds';

@NgModule({
    imports:[
        CommonModule,
        LoginRoutingModule
    ],
    declarations:[
        LoginComponent,
        SearchComponent
    ],
    providers: [
        LoginService,
        AuthService
    ]
})

export class LoginModule {}