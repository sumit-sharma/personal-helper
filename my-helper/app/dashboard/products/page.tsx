import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
 

import { ProductInterface } from "@/lib/Models/Products";
import { getProducts } from "@/server/action/dashboard";
import React from "react";

const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]
const Product = async () => {
  const products = await getProducts();
  const data = await products;
  console.log(data);
  return (
    <>
    <div>
      {data.data.map((post: ProductInterface) => (
        <li key={post._id}>{post.title}</li>
      ))}
    </div>

    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.data} />
    </div>
      </>
  );
};

export default Product;
