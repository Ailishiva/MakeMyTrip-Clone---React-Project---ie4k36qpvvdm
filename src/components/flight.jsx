
import React, { useEffect, useState } from "react";
import axios from "axios";

function Flight() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights").then((data) => {
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
            From<h3><span>{item?.from}</span></h3>
            To<h3><span>{item?.to}</span></h3>
            Departure<h3><span>{item?.departure.departureTime} | {item?.departure.departureDate}</span></h3>
            Return<h3><span>{item?.return.returnTime} | {item?.return.returnDate}</span></h3>
            Price<h3><span>{item?.price}</span></h3>
            Duration<h3><span>{item?.duration}</span></h3>
            via<h3><span>{item?.via}</span></h3>
            Airline<h3><span>{item?.airlineName}</span></h3>
            <button>Book</button>
          </div>
          
          </>
        );
      })}
    </div>
  );
}

export default Flight;
