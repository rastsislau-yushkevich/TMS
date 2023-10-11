import React from "react";

const TextArea = () => {
    return(
        <label>
            Text
            <textarea cols={Number("30")} rows={Number("10")} placeholder="Add your text"></textarea>
        </label>
    )
}

export default TextArea