export interface CategoryModel {
  readonly id: number;
  readonly parentId: number;
  readonly categoryName: string;
  readonly seo_url: string;
  readonly subCategories?: CategoryModel[];
}
