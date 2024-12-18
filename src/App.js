import logo from './logo.svg';
import './App.css';
import Anh from "../src/img/anh.jpg"
import Em from "../src/img/emm.jpg"
import Heart from "../src/img/heart.png"
import image1 from "../src/img/1.jpg"
import image2 from "../src/img/2.jpg"
import image3 from "../src/img/3.jpg"
import image4 from "../src/img/4.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="scroll-text">
          Đây là website lưu trữ những kỉ niệm của chúng mình ❤
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
          <div className='item'>
            <div className='content'>
              <p>Đây là hôm tớ tỏ tình và được em đồng ý làm người yêu tớ 😊. Tớ vuii lắm 😊</p>
              <img src={image1}></img>
              <img src={image2}></img>
              <img src={image3}></img>
              <img src={image4}></img>
            </div>
          </div>
        </div>
        <div className='xiang'>
          <em>Tớ mong tớ và em sẽ luôn vui vẻ và hạnh phúc cho đến mãi về sau này 🥰</em>
        </div>
      </div>
    </div>
  );
}

export default App;
