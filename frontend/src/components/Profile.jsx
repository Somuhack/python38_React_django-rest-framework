// import React from 'react'
// import "../assets/style.css"
// import ComposativeCompo from './ComposativeCompo'
// const Profile = ({info}) => {
//     const mystyle={
//         color:'white',
//         backgroundColor:'black',
//     }
//   return (
//     <ComposativeCompo><p classNameName='bg-red'>Profile : {info.name} {info.age}</p></ComposativeCompo>
//   )
// }

// export default Profile
import React from "react";
import MainLayout from "../Layout/MainLayout";
import img1 from "../assets/img/ubaid-e-alyafizi-g4W3SLjcvMA-unsplash.jpg"
const Profile = () => {
  return (
   <MainLayout>
     <div className="card" style={{width: "18rem"}}>
      <img src={img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
      </div>
    </div>
   </MainLayout>
  );
};

export default Profile;
