import React, { useEffect, useState } from "react";
import axios from "axios";

function HotelData() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
      {post.map((item, i) => {
        return (
          <>
          <div key={i} style={{border : "1px solid", width: "40%",  margin: "20px"} }>
            City<h3><span>{item?.city}</span></h3>
            HotelName<h3><span>{item?.hotel_name}</span></h3>
            CheckIn<h3><span>{item?.check_in} </span></h3>
            CheckOut<h3><span>{item?.check_out}</span></h3>
            Guests<h3><span>{item?.guests}</span></h3>
            PricePerNight<h3><span>{item?.price_per_night}</span></h3>
            Rating<h3><span>{item?.rating}</span></h3>
            RoomType<h3><span>{item?.room_type}</span></h3>
            <button>Book</button>
          </div>
          
          </>
        );
      })}
    </div>
  );
}

export default HotelData;
