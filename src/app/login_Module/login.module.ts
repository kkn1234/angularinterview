import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from './services/login.service';
import { LoginComponent } from './component/login.component';
import { SearchComponent } from './searchComponent/search.component';
import { AuthService } from '../auth.gaurds';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        LoginRoutingModule
        
    ],
    declarations:[
        SearchComponent
    ],
    providers: [
        LoginService,
        AuthService
    ]
})

export class LoginModule {}