import { CanActivate } from '@angular/router';


export class AuthService implements CanActivate {

    canActivate(){
        let isUser = true;

        if(isUser){
            return true
        }else{
            return false;
        }
        
    }

}