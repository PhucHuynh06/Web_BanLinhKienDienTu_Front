import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {WishedProduct} from "@/models/WishedProduct";
import Script from "next/script";

export default function ProductsPage({products,wishedProducts}) {
  return (
    <>
      <Header />
      <Center>
        <Title>Sản Phẩm</Title>
        <ProductsGrid products={products} wishedProducts={wishedProducts} />
        <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      <df-messenger
        intent="WELCOME"
        chat-title="Chattingbox"
        agent-id="f4382686-1110-47a2-9dce-04b7061eece7"
        language-code="en">
      </df-messenger>
      </Center>
    </>
  );
}

export async function getServerSideProps(ctx) {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  const wishedProducts = session?.user
      ? await WishedProduct.find({
          userEmail:session?.user.email,
          product: products.map(p => p._id.toString()),
        })
      : [];
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
      wishedProducts: wishedProducts.map(i => i.product.toString()),
    }
  };
}