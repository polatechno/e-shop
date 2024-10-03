
import { createClient } from "@/supabase/client";
import Card from "./components/card";
import { notFound } from "next/navigation";
import { getImageUrl } from "@/utils";

export const revalidate = 0;

export default async function Home() {

  const supabase = createClient();

  const { data: topProducts } = await supabase
    .from('products')
    .select()
    .is('boost', true);


  const { data: products } = await supabase
    .from('products')
    .select();

  if (!products) {
    return notFound();
  }

  return (
    <main className="min-h-screen mx-auto max-w-[100rem]">
      <div className="px-12 pt-12 pb-20">
        <div className="flex flex-col xl:flex-row gap-2 xl:gap-40">
          <div className="pt-12 pb-12">
            <h2 className="text-4xl mb-16 uppercase font-semibold" >Our Top products</h2>
            <p className="text-xl">You can pay to boost your products here. </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-12">

            {topProducts ? topProducts.map((product) => (
              <Card key={'${product.name}-${product.id}'} {...product}
                imageUrl={getImageUrl(product.imageUrl)} />
            )) : <p className="pt-14 text-xl text-gray-800"> All top products are gone...</p>
            }

          </div>
        </div>
        <h2 className="text-4xl mt-20 mb-16 font-semibold">ALL PRODUCTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {products && products.map((product) => (
            <Card key={'${product.name}-${product.id}'} {...product}
              imageUrl={getImageUrl(product.imageUrl)} />
          ))}

        </div>
      </div>

    </main>
  );
}
