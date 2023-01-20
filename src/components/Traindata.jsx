
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function TrainData() {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     axios.get("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains").then((data) => {
//       console.log(data);
//       setPost(data?.data);
//     });
//   }, []);

//   return (
//     <div>
//       {post.map((item, i) => {
//         return (
//           <>
//           <div key={i} style={{border : "1px solid", width: "40%",  margin: "20px"} }>
//             From<h3><span>{item?.from}</span></h3>
//             To<h3><span>{item?.to}</span></h3>
//             Departure<h3><span>{item?.departure.departureTime} | {item?.departure.departureDate}</span></h3>
//             {/* Return<h3><span>{item?.return.returnTime} | {item?.return.returnDate}</span></h3> */}
//             Price<h3><span>{item?.price}</span></h3>
//             Duration<h3><span>{item?.duration}</span></h3>
//             KiloMeters<h3><span>{item?.kilometers}</span></h3>
//             TainNumber<h3><span>{item?.train_number}</span></h3>
//             <button>Book</button>
//           </div>
          
//           </>
//         );
//       })}
//     </div>
//   );
// }

// export default TrainData;


export const TrainData = [
  { "id" : 1,
    "from":"Delhi",
   "to":"Mumbai",
   "departure":{"departureTime":"05:00PM","departureDate":"2023-02-02"},
   "duration":"15h 40m",
   "kilometers":"1384",
   "price":"4500",
   "train_number":"102531"
  },
  {  "id" : 2,
    "from":"Delhi","to":"Goa",
    "departure":{"departureTime":"01:25PM","departureDate":"2023-02-06"},
    "duration":"1d 5h",
    "kilometers":"2094",
    "price":"5500",
    "train_number":"226633"
  },
  { "id" : 3,
    "from":"Mumbai","to":"Bangalore",
    "departure":{"departureTime":"10:05PM","departureDate":"2023-02-04"},
    "duration":"1d 1h 5m",
    "kilometers":"1190",
    "price":"5000",
    "train_number":"036920"
  },
  {"id" : 4,
    "from":"Delhi","to":"Bangalore",
    "departure":{"departureTime":"07:00PM","departureDate":"2023-02-05"},
    "duration":"1d 9h 30m",
    "kilometers":"2365",
    "price":"5000",
    "train_number":"229260"
  },
  {"id" : 5,
    "from":"Kolkata","to":"Chennai",
    "departure":{"departureTime":"4:20PM","departureDate":"2023-02-06"},
    "duration":"1d 3h 45m",
    "kilometers":"1666",
    "price":"5500",
    "train_number":"026654"
  }
]