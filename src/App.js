import logo from './logo.svg';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Anh from "../src/img/anh.jpg"
import Em from "../src/img/emm.jpg"
import Heart from "../src/img/heart.png"
import video1 from "../src/img/video1.mp4"
import video2 from "../src/img/video2.mp4"
import video3 from "../src/img/video3.mp4"
import video4 from "../src/img/video4.mp4"
import video5 from "../src/img/video5.mp4"


function App() {
  const [inputPassword, setInputPassword] = useState(""); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const defaultPassword = "anhyeuphuong"; 
  const handleCheckPassword = () => {
    if (inputPassword === defaultPassword) {
      setIsAuthenticated(true); 
      toast.success("Xác thực thành công!");
    } else {
      toast.error("Mật khẩu không đúng!");
    }
  };
  const startDate = new Date("2024-09-17");
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - startDate); 
  const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
  console.log("Yeu duoc", dayCount, "ngay");
  
  const data = [
    {
    "url": "raw.githubusercontent.com",
    "id": 1,
    "content": "Đây là hôm tớ tỏ tình và được em đồng ý làm người yêu tớ 😊. Tớ vuii lắm 😊",
      "images": [
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-1.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-2.jpg",
          "id": "2"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-3.jpg",
          "id": "3"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-4.jpg",
          "id": "4"
        }
      ]
    },
    {
      "url": "raw.githubusercontent.com",
      "id": 2,
      "content": "Chúng tớ đi xem phim nè",
        "images": [
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img1.jpg",
            "id": "1"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img2.jpg",
            "id": "2"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img3.jpg",
            "id": "3"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img4.jpg",
            "id": "4"
          }
        ]
      },
      {
        "url": "raw.githubusercontent.com",
        "id": 3,
        "content": "Được em tổ chức sinh nhật cho tớ 🎂🙆‍♂️",
          "images": [
            {
              "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img18.jpg",
              "id": "1"
            },
          ]
        },
        {
          "url": "raw.githubusercontent.com",
          "id": 4,
          "content": "Lần đầu trong đời tớ được đi chụp photoboot, đặc biệt hơn là cùng em",
            "images": [
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img25.jpg",
                "id": "1"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img30.jpg",
                "id": "2"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img27.jpg",
                "id": "3"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img28.jpg",
                "id": "4"
              }, 
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img29.jpg",
                "id": "5"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img37.jpg",
                "id": "6"
              },
            ]
          },
          {
            "url": "raw.githubusercontent.com",
            "id": 5,
            "content": "Chúng tớ có nhiều kỉ niệm lắm đây nè",
              "images": [
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img5.jpg",
                  "id": "1"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img6.jpg",
                  "id": "2"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img7.jpg",
                  "id": "3"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img8.jpg",
                  "id": "4"
                }, 
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img9.jpg",
                  "id": "5"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img10.jpg",
                  "id": "6"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img12.jpg",
                  "id": "8"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img13.jpg",
                  "id": "9"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img14.jpg",
                  "id": "10"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img15.jpg",
                  "id": "11"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img16.jpg",
                  "id": "12"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img17.jpg",
                  "id": "13"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img19.jpg",
                  "id": "14"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img20.jpg",
                  "id": "15"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img21.jpg",
                  "id": "16"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img22.jpg",
                  "id": "17"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img23.jpg",
                  "id": "18"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img24.jpg",
                  "id": "19"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img10.jpg",
                  "id": "20"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img31.jpg",
                  "id": "21"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img32.jpg",
                  "id": "22"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img33.jpg",
                  "id": "23"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img34.jpg",
                  "id": "24"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img35.jpg",
                  "id": "25"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img38.jpg",
                  "id": "26"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img39.jpg",
                  "id": "27"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img40.jpg",
                  "id": "28"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img41.jpg",
                  "id": "29"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img42.jpg",
                  "id": "30"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img43.jpg",
                  "id": "31"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img44.jpg",
                  "id": "32"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img45.jpg",
                  "id": "33"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img46.jpg",
                  "id": "34"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img47.jpg",
                  "id": "35"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img48.jpg",
                  "id": "36"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img49.jpg",
                  "id": "37"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img50.jpg",
                  "id": "38"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img51.jpg",
                  "id": "39"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img52.jpg",
                  "id": "40"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img53.jpg",
                  "id": "41"
                },
          

                //hi
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img54.jpg",
                  "id": "43"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img55.jpg",
                  "id": "44"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img76.jpg",
                  "id": "45"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img57.jpg",
                  "id": "46"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img58.jpg",
                  "id": "47"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img59.jpg",
                  "id": "48"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img60.jpg",
                  "id": "49"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img77.jpg",
                  "id": "50"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img78.jpg",
                  "id": "51"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img79.jpg",
                  "id": "52"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img80.jpg",
                  "id": "53"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img81.jpg",
                  "id": "54"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img82.jpg",
                  "id": "55"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img83.jpg",
                  "id": "56"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img68.jpg",
                  "id": "57"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img70.jpg",
                  "id": "59"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img84.jpg",
                  "id": "60"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img72.jpg",
                  "id": "61"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img73.jpg",
                  "id": "62"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img74.jpg",
                  "id": "63"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img75.jpg",
                  "id": "64"
                },
              ]
            },
]
  return (
    <div className="App">
      {
        !isAuthenticated ? (
          <div className='form-password'>
          <h3>Nhập mật khẩu để truy cập:</h3>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <button onClick={handleCheckPassword}>Xác nhận</button>
        </div>
        ) : (
          <div>
          <header className="App-header">
           <div class="scroll-text">
               Đây là nơi lưu trữ những kỉ niệm của chúng mình ❤
           </div>
           </header>
           <div className="App-body">
             <div className="couple">
               <h2>Đây Là Chúng Tớ</h2>
               <div className="meandhoney">
                 <div className='me'>
                   <img src={Anh}></img>
                   <h3>Đây Là Tớ</h3>
                 </div>
                 <div className='heart'>
                   <img src={Heart}></img>
                 </div>
                 <div className='honey'>
                   <img src={Em}></img>
                   <h3>Đây Là Em</h3>
                 </div>
               </div>
             </div>
             <div className='all-img'>
               <div className='title-img-all'>
                 <h2>Dưới đây là kỉ niệm của chúng tớ </h2>
               </div>
               {data?.map((dataItem) => (
             <div className='item' key={dataItem.id}>
                 <div className='content'>
                   <p>{dataItem.content}</p>
                   {dataItem?.images?.map((img) => (
                     <img key={img.id} src={img.url}></img>
                   ))}
                 </div>
             </div>
               ))}
              
             </div>
             <div className='videoo-em-iu'>
             <div className='title-video'>
               <h2>Khoảnh khắc của tụi tớ</h2>
             </div>
               <div className='all-video'>
                 <div className='video-container'>
                 <video controls width={"300px"} height={"300px"}>
                   <source src={video1} type="video/mp4" />
                   Trình duyệt của bạn không hỗ trợ video.
                   </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video2} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video3} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video4} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video5} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
               </div>
             </div>
             <div className='xiang'>
               <em>Anh mong em sẽ luôn đồng hành và ở bên anh mãi về sau bởi vì em biết đó anh rất trân trọng em cũng như mối quan hệ này của hai taaaa 🥰. Cũng mong rằng mỗi khi em bé buồn hay chán nản em bé có thể tâm sự cùng anh và vào lại đây để xem lại những kỉ niệm đẹp của đôi taa 🥰</em>
             </div>
           </div>
          </div>
        )
      }
    <ToastContainer />
    </div>
  );
}

export default App;
