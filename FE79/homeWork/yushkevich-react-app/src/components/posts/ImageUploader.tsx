import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { FcCancel } from "react-icons/fc"

const ImageUploader = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
      <ImageUploading
        value={images}
        onChange={onChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <input type="text" readOnly value={imageList.length>0 ? imageList[0].file?.name : "Upload Image"} style={{border: "1px solid black", padding: "4px"}} />
            <button
              style={{background: "#0d6efd", padding: "5px", color: "white"}}
              onClick={onImageUpload}
              {...dragProps}
            >
              {imageList[0] ? "Edit" : "Upload"}
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll} style={{fontSize: "25px", background: "none"}}><FcCancel /></button>
            {/* {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </ImageUploading>
  );
}

export { ImageUploader }