import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import NavOptions from "./components/NavOptions";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import Banner from "./components/Banner";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import data from "./data/data.json";
function App() {
  return (
    <>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        laptop={data.laptop}
        tv={data.tv}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio = {data.audio}
        accessories = {data.accessories}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="START PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner end={data.banner.end} />
      <Footer
        support={data.footer.support}
        contactUs={data.footer.contactUs}
        shopAndLearn={data.footer.shopAndLearn}
        aboutUS={data.footer.aboutUS}
        retailStore={data.footer.retailStore}
      />
    </>
  );
}

export default App;
