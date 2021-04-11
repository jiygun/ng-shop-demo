import { Observable } from "rxjs";

export interface Database{
    post(url:string,data:any):Observable<any>;
    get<T>(url:string,...[]):Observable<T>;
    put(url:string,data:any):Observable<any>;
    delete(url:string,data:any):Observable<any>;
}
