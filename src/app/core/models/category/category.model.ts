export class CategoryModel{
    constructor(public readonly id:number,public readonly parentId:number,public readonly categoryName:string,public readonly seo_url:string,public readonly subCategories?:CategoryModel[]){
    }
}