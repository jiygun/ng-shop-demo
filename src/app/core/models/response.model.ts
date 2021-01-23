export interface I_ResponseModel<T>{
    data:T[];
    metadata:string | null | undefined;
};

export interface I_CategoryModel{
    id:number;
    parentId:number;
    categoryName:string;
    seo_url:string;
}

export interface I_SlideModel{
    id:number;
    slideImage:string;
    bannerImage:string;
    seo_url:string;
}

export interface I_ProductModel{
    id:number;
    productName:string;
    productCode:string;
    productPrice:number;
    productImages:string[] | [];
    seo_url:string;
}