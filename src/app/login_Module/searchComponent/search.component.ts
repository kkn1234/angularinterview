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
    showResult:boolean = false;

    constructor(private _LoginService: LoginService){}


    onSearch(query: string){
        this.showResult = false;
        this._LoginService.getCharacterList(query)
                          .subscribe(res=>{
                              console.log(res)
                              this.showResult = true;
                              this.user = res.results;
                          })
    }
    
}