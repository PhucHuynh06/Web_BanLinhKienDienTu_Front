import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { WishedProduct } from "@/models/WishedProduct";
import { Setting } from "@/models/Setting";
import styled from "styled-components";
import Script from "next/script";

const FeaturedContainer = styled.div`
  text-align: justify;
`;

export default function Home({ featuredProduct, newProducts, wishedNewProducts }) {
  return (
    
    <div>
      <Header />
      <FeaturedContainer>
        <Featured product={featuredProduct} />
      </FeaturedContainer>
      <NewProducts products={newProducts} wishedProducts={wishedNewProducts} />
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></Script>
      <df-messenger
        intent="WELCOME"
        chat-title="Chattingbox"
        agent-id="f4382686-1110-47a2-9dce-04b7061eece7"
        language-code="en">
      </df-messenger>
    </div>
  );
}



export async function getServerSideProps(ctx) {
  try {
    await mongooseConnect();

    const featuredProductSetting = await Setting.findOne({ name: 'featuredProductId' });
    const featuredProductId = featuredProductSetting.value;

    const featuredProduct = await Product.findById(featuredProductId);

    const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });
    const newProductIds = newProducts.map(p => p._id.toString());

    const session = await getServerSession(ctx.req, ctx.res, authOptions);

    let wishedNewProducts = [];
    if (session?.user) {
      wishedNewProducts = await WishedProduct.find({
        userEmail: session.user.email,
        product: newProductIds,
      });
    }

    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
        wishedNewProducts: wishedNewProducts.map(i => i.product.toString()),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        featuredProduct: null,
        newProducts: [],
        wishedNewProducts: [],
      },
    };
  }
}
