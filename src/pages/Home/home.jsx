import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/exploreMenu";
import Header from "../../components/Header/header";
import "./home.css"

export default function Home(){
    const [category,setCategory]=useState("All");
    return <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
    </div>;

}