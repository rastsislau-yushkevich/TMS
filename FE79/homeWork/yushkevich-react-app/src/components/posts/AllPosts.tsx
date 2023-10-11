import React, { useContext, useState } from "react";
import { FavouritePosts } from "./FavouritePosts";
import { PopularPosts } from "./PopularPosts";
import { Posts } from "./Posts";
import { Tabs } from "../constants"
import "./AllPosts.css"
import { ThemeContext } from "../../contexts";
import "../../styles/Themes.css"

const AllPosts = () => {
    const [isActive, setIsActive] = useState(Tabs.ALL);

    const sampleThemeContext = useContext(ThemeContext);

    const handleTabClick = (param: Tabs) => {
        setIsActive(param);
    }

    return(
        <div className="all-posts">
            <h2 className="blog-header">Blog</h2>
            <div className="tab-buttons ">
                <button className={`tab ${isActive === Tabs.ALL ? "active" : ""} ${sampleThemeContext?.theme}-tab`} onClick={() => handleTabClick(Tabs.ALL)}>All</button>
                <button className={`tab ${isActive === Tabs.FAVOURITES ? "active" : ""} ${sampleThemeContext?.theme}-tab`} onClick={() => handleTabClick(Tabs.FAVOURITES)}>My Favourites</button>
                <button className={`tab ${isActive === Tabs.POPULAR ? "active" : ""} ${sampleThemeContext?.theme}-tab`} onClick={() => handleTabClick(Tabs.POPULAR)}>Popular</button>
            </div>
            {isActive === Tabs.ALL && <Posts />}
            {isActive === Tabs.FAVOURITES && <FavouritePosts />}
            {isActive === Tabs.POPULAR && <PopularPosts />}    
        </div>
    )
}

export { AllPosts }