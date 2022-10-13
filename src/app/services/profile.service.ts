import {HttpClient} from '@angular/common/http';    
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class  ProfileService {
    constructor(private http: HttpClient) {
        
    }
    public getPersonaldata(): Observable <any> {
        return this.http.get("./assets/json/profilepersonalDetails.json");
    }
    public getProfiledata(): Observable <any> {
        return this.http.get("./assets/json/profileeducationDetails.json");
    }
    public getWorkdata(): Observable <any> {
        return this.http.get("./assets/json/workDetails.json");
    }
}

