import React from "react";

const ImageList = (props) => {

   const imagesFinal = props.images.map(({id, urls, description}) => {
      return <img key={id} src={urls.regular} alt={description} />;
   });

   return (
      <div>{imagesFinal}</div>
   );
};

export default ImageList;