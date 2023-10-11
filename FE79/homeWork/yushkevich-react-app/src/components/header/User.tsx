import React from "react";
import IUser from "./InterfaceUser";
import UserAlias from "./UserAlias";
import UserAvatar from "./UserAvatar";

const User = (props: IUser) => {
    let {username} = props;
    return(
        <div className="user"
            >
                <UserAvatar username={"Ilya Yushkevich"} />
                <UserAlias username={username} />
        </div>
    )
}

export default User