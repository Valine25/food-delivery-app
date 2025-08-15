import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/exploreMenu";
import Header from "../../components/Header/header";
import "./home.css";
import FoodDisplay from "../../components/FoodDisplay/fooddisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

export default function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  );
}
