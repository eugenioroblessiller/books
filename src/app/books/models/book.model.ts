export class Book {
  public id?: string
  isbn!: string;
  title!: string;
  isInWishList!: boolean;
  subtitle?: string;
  author?: string;
  published?: Date;
  publisher?: string;
  pages?: number;
  description?: string;
  website?: string;
}
