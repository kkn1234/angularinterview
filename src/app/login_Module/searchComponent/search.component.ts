import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';


interface Iuser {
    email: string;
    password: any;
}

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})


export class SearchComponent {
    user:Iuser; 

    constructor(private _LoginService: LoginService){}


    onSearch(query: string){
        this._LoginService.getCharacterList(query)
                          .subscribe(res=>{
                              console.log(res)
                              this.user = res.results;
                          })
    }
    
}