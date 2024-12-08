
interface creatorInterface {
    role: string,
    _id: string,
    name: string,
}

export interface categoryInterface{
  _id: string,
  name: string,
  slug: string,
}

export interface ProductInterface {
  _id: string,
  title: string,
  price: number,
  category: categoryInterface,
  description: string|null,
  createdBy: creatorInterface,
  createdAt: Date,
  updatedAt: Date,
  slug: string
}
