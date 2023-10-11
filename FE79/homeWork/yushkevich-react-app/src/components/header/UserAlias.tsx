import React from "react";
import IUser from "./InterfaceUser";

const UserAlias = (props: IUser) => {
    let {username} = props;
    return(
        <div className="user-alias"
            >
                {username}
        </div>
    )
}

export default UserAlias