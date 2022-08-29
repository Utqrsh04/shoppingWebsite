import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <div className="loader-container">
      <span class="dot"></span>
      <div class="dots">
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
      </div>
    </div>
  ) : (
    <div className="App">
      <div>
        <Header />
        <Hero />
        <header className="App-header">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, rem!
          Doloremque dolore quos, quis necessitatibus consectetur iusto non ea!
          Beatae dolor quidem eligendi quos maxime dolorem omnis voluptate velit
          corrupti error quia impedit reprehenderit natus fugiat ullam soluta,
          eius illum fuga voluptas autem excepturi unde dignissimos. Voluptas
          inventore esse assumenda. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Quae consequuntur expedita facere culpa. Nam
          repudiandae modi totam. Pariatur ipsa consectetur tenetur iusto vel
          obcaecati, possimus non velit quod molestias. Laborum natus eaque illo
          sit commodi odit eum omnis quo? Eius soluta non consequatur modi quos,
          accusamus tenetur numquam cumque laborum molestiae magnam amet
          dignissimos aliquid unde corrupti dolore blanditiis? Aliquam nesciunt
          quos consequuntur, odio excepturi fugiat quod sed aperiam, enim esse
          cupiditate voluptates. Eum, sint exercitationem debitis eaque
          voluptatem eos placeat vel aperiam voluptatum ratione saepe labore
          delectus ipsum nesciunt rerum nihil illum nostrum vitae quae assumenda
          corporis tempora! Neque.
        </header>
      </div>
    </div>
  );
}

export default App;
