import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPosts } from "../../redux/action_creators/posts_action_creators";
import { StoreState } from "../../types";

const SearchInput = () => {

    const dispatch = useDispatch();

    const search = useSelector((state: StoreState) => state.posts.search);

    const handleSearchChange = (e: any) => {
        dispatch(setSearchPosts(e.target.value));
    }

    return(
        <input className="search-input" type="search" value={search} name="" id="" onChange={handleSearchChange}/>
    )
}

export default SearchInput