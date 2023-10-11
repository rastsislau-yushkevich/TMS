import React, {Component, useState} from "react";
import "../../styles/Header.css";
import HeaderButton from "./HeaderButton";
import ButtonTypes from "./ButtonTypes";
import User from "./User";
import SearchInput from "./SearchInput";
import { BurgerMenu } from "./BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../types";
import { loadPosts, setSearchPosts } from "../../redux/action_creators/posts_action_creators";

const Header = () => {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const currentUser = useSelector((state: StoreState) => state.user.user);
    const search = useSelector((state: StoreState) => state.posts.search);
    const limit = useSelector((state: StoreState) => state.posts.limit);

    const handleSearchClick = () => {
        dispatch(loadPosts({search, limit}));
    }

    return(
        <>
            <div className="header">
                <HeaderButton type={ButtonTypes.burger} 
                    onClick={() => setOpen(!open)}
                    isOpen = {open}
                    /> 
                <SearchInput />
                <HeaderButton type={ButtonTypes.search} 
                    onClick={handleSearchClick}
                    />
                {currentUser ? <User username={String(currentUser?.username)}/> : ""}
            </div>
            {open && <BurgerMenu />}
        </>
    )
}

export default Header