import Discover from "@/components/Discover.jsx";
import Banner from "@/sections/Banner.jsx";
import Choose from "@/sections/Choose.jsx";
import Customers from "@/sections/Customers.jsx";
import Discovers from "@/sections/Discovers.jsx";
import Footer from "@/sections/Footer.jsx";
import Navbar from "@/sections/Navbar.jsx";
import Posts from "@/sections/Posts.jsx";
import Request from "@/sections/Request.jsx";
import Stats from "@/sections/Stats.jsx";

import Company from "./../sections/Company";

export default function Home() {
  return (
    <main className="bg-white w-full overflow-hidden">
      <Navbar />
      <Banner />
      <Company />
      <Discover />
      <Discovers />
      <Choose />
      <Customers />
      <Stats />
      <Request />
      <Posts />
      <Footer />
    </main>
  );
}
