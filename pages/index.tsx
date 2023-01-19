import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import ChooseUp from "@/components/home/ChooseUp";
import Contact from "@/components/home/Contact";
import Gallary from "@/components/home/Gallary";
import Offer from "@/components/home/Offer";
import PopularPlace from "@/components/home/PopularPlace";
import Revew from "@/components/home/Revew";
import Layout from "@/components/shared/Layout";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <ChooseUp />
      <PopularPlace />
      <Offer />
      <Gallary />
      <Blog />
      <Revew />
      <Contact />
    </Layout>
  )
}
