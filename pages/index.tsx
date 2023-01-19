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
      <div className="bg-[url('/image/home/banner/banner.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute w-full h-full top-0 blur-md" />
        <div className="bg-gradient-to-tl to-slate-900/80 from-slate-900/50 relative z-40">
        <Contact />
        </div>
      </div>
    </Layout>
  )
}
