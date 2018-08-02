import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


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

    constructor(private _LoginService: LoginService, private _route: Router){}


    onLogin(email, password){
        this.user = {
            email: email, password: password
        }

        this._route.navigate(['/search'])

        console.log(this.user)
    }

    onEmail(email){
        console.log(email)
    }
    
}