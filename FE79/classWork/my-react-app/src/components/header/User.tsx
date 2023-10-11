import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../types";
import IUser from "./InterfaceUser";
import UserAlias from "./UserAlias";
import UserAvatar from "./UserAvatar";

const User = (props: IUser) => {
    let {username} = props;
    const currentUser = useSelector((state: StoreState) => state.user.user);
    return(
        <>
        {currentUser && 
        <div className="user">
            {/* <UserAvatar username={currentUser.username} /> */}
            <UserAlias username={currentUser.username} />
        </div>}
        </>
    )
}

export default User