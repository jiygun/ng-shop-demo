import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Database } from './database';


export class Http implements Database{
    constructor(private httpClient:HttpClient){}
    post(url: string, data: any): Observable<any> {
        return this.httpClient.post(url,data);
    }
    get(url: string, ...[]: Iterable<any>): Observable<any> {
        return this.httpClient.get(url);
    }
    put(url: string, data: any): Observable<any> {
        return this.httpClient.put(url,data);
    }
    delete(url: string, data: any): Observable<any> {
        return this.httpClient.delete(url,data);
    }

}