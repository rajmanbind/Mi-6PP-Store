import React, { useEffect, useState } from "react";
import NavCard from "./NavCard";
import "../styles/NavOptions.css";
const NavOptions = ({
  miPhones,
  redmiPhones,
  laptop,
  tv,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhonesToggle, setmiPhonesToggle] = useState(false);
  const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setfitnessAndLifeStyleToggle] =
    useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      return setmiPhonesToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
      return setredmiPhonesToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setlaptopToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return settvToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setfitnessAndLifeStyleToggle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);
  return (
    <div className="navOptions">
      {miPhonesToggle
        ? miPhones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitnessAndLifeStyleToggle
        ? fitnessAndLifeStyle.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {audioToggle
        ? audio.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
