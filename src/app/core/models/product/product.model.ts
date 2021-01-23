export class ProductModel{
    constructor(public readonly id:number,public readonly productName:string,public readonly productCode:string,
        public readonly productPrice:number,public readonly productImages:string[] | [],public readonly seo_url:string){
    }
}