import React from "react";
import IUser from "./InterfaceUser";

const UserAvatar = (props: IUser) => {
    let {username} = props;
    let [firstName, lastName] = username.split(" ");
    return(
        <div className="user-avatar"
            >
                {`${firstName.charAt(0)} ${lastName.charAt(0)}`}
        </div>
    )
}

export default UserAvatar
