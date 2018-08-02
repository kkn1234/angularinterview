import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()

export class LoginService{
    constructor(private _http: Http){}

    getCharacterList(query: string): Observable<any>{
        return this._http.get(`https://swapi.co/api/people/?search=${query}`).map(res=>{
            return  res.json();
        })

    }

}