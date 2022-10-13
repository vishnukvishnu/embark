import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class  ProfileviewService {
    constructor(private http: HttpClient) {
        
    }
    public getPersonaldata(): Observable <any> {
        return this.http.get("./assets/json/profilepersonalDetails.json");
    }
}

