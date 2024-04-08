import React from "react";
import { useParams } from "react-router-dom";
function Product(props) {
  const { item } = useParams();
  let myData = props.vData.find((x) => {
    return x.id == item;
  });
  console.log(myData);
  console.log(props);
  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subProduct">
        <h3>{myData.title}</h3>
        <hr></hr>
        <div className="content">
          <img src={`../images/${myData.img}`} alt="" />
          <p>{myData.content}</p>
        </div>
      </div>
    </>
  );
}

export default Product;
