"use server";




export async function getProducts() {
  const data = await fetch( "https://api.storerestapi.com/products" )
  const result =  await data.json();
// console.log(result.data);
  return result;
  // return  { "status": 200, "message": "login successful", "sss": result };
}



