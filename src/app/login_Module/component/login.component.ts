import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';


interface Iuser {
    email: string;
    password: any;
}

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent {
    user:Iuser; 

    constructor(private _LoginService: LoginService){}

    
}