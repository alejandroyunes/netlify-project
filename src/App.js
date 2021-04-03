import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="nav">
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      </div>

      <div class="contenedor">
  <ul class="masonry">
    <li>
      <a href="https://unsplash.com/photos/LG7uioMhgKY">
        <img src="https://source.unsplash.com/LG7uioMhgKY/800" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/MASsn4T3KtM">
        <img src="https://source.unsplash.com/MASsn4T3KtM/800" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/ipkzLrnLNF8">
        <img src="https://source.unsplash.com/ipkzLrnLNF8/800" alt="A close-up leaf" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/G2qK6ig9kw4">
        <img src="https://source.unsplash.com/G2qK6ig9kw4/800" alt="Neon bricks on black" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/fRzUPSFnp04">
        <img src="https://source.unsplash.com/fRzUPSFnp04/800" alt="Blue paint waves on black" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/wQLAGv4_OYs">
        <img src="https://source.unsplash.com/wQLAGv4_OYs/800" alt="Water droplets on glass" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/wKc-i5zwfok">
        <img src="https://source.unsplash.com/wKc-i5zwfok/800" alt="Multicoloured light streaks at night" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/ahi73ZN5P0Y">
        <img src="https://source.unsplash.com/ahi73ZN5P0Y/800" alt="A close-up of firewood" />
      </a>
    </li>
    <li>
      <a href="https://unsplash.com/photos/SMSLyc9FHl0">
        <img src="https://source.unsplash.com/SMSLyc9FHl0/800" alt="Abstract art sea painting" />
      </a>
    </li>
  </ul>
</div>
    </>
  );
}

export default App;
