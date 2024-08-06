
import ProductSingle from "@/app/components/ProductSingle";
import axios from "axios";

export default async function ProductPage({ params }) {
  let product = await axios.get(`http://localhost:8000/watches/${params.id}`);
  return (
    <>
    <ProductSingle
       
        brand={product.data.brand}
        price={product.data.price}
       
      />
    </>
  );
}