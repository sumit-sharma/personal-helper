"use client"

import { ProductInterface } from "@/lib/Models/Products"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


// _id: string,
// title: string,
// price: number,
// category: categoryInterface,
// description: string|null,
// createdBy: creatorInterface,
// createdAt: Date,
// updatedAt: Date,
// slug: string


export const columns: ColumnDef<ProductInterface>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "price",
    header: "Amount",
  },
  {
    accessorKey: "category.name",
    header: "Category Name",
  },
]
