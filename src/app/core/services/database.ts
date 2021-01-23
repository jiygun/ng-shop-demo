import { Observable } from "rxjs";

export interface Database{
    post(url:string,data:any):Observable<any>;
    get(url:string,...[]):Observable<any>;
    put(url:string,data:any):Observable<any>;
    delete(url:string,data:any):Observable<any>;
}