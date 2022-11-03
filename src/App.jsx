import { useLayoutEffect, useState, useEffect } from "react";
import { gsap } from "gsap";
import Catalogo from "./components/Catalogo";
import Contatti from "./components/Contatti";
import NuoviArrivi from "./components/NuoviArrivi";
import Offerte from "./components/Offerte";
import "./App.css";

function App() {
  const [page, setPage] = useState("");
  const [componentToRender, setComponentToRender] = useState("");

  useLayoutEffect(() => {
    const openBookTl = gsap.timeline();

    openBookTl
      .from(".bookBox", { scale: 0.5 })
      .to(".cover1", {
        background: "rgb(251, 237, 211)",
        rotateY: -180,
        duration: 1,
        transformOrigin: "left bottom",
        delay: 1,
      })
      .to(
        ".titleContainer",
        {
          display: "none",
        },
        "-=1.5"
      )
      .to(".cover1", { display: "none" })
      .to(".cover2", { display: "block", width: "45vw" })
      .to(".page1", { width: "45vw" }, "<")
      .to(".page0", { width: "45vw" }, "<")
      .to(".bookBox", { scale: 1, duration: 0.4 }, "<")
      .fromTo(".page0", { fontSize: 0 }, { fontSize: "1em" }, "<");
  }, []);

  useEffect(() => {
    if (page == "Cat") {
      setComponentToRender(<Catalogo />);
    } else if (page == "Con") {
      setComponentToRender(<Contatti />);
    } else if (page == "Nuo") {
      setComponentToRender(<NuoviArrivi />);
    } else if (page == "Off") {
      setComponentToRender(<Offerte />);
    }
  }, [page]);

  const turnThePage = (e) => {
    const turnPage = gsap.timeline();

    turnPage
      .fromTo(
        ".page0",
        { rotateY: 0, display: "initial" },
        {
          background: "rgb(251, 237, 211)",
          rotateY: -180,
          duration: 1,
          transformOrigin: "left bottom",
        }
      )
      .to(".page0", { fontSize: 0, display: "none" }, "<");

    setPage(e.target.innerHTML.slice(0, 3));
  };

  return (
    <div className="App">
      <div className="table">
        subliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMesubliminalMessage:HireMe
      </div>
      <div className="bookBox">
        <div className="cover1 div2">
          <div className="titleContainer">
            <h1 className="title">LIBRANDO</h1>
            <h2 className="title">Storie per bambini</h2>
            <h3 className="title">(e per i loro genitori)</h3>
          </div>
        </div>
        <div className="cover2 div1">
          <h1>Librando</h1>
          <h2>Indice</h2>

          <h3 onClick={(e) => turnThePage(e)}>
            Catalogo.............................08
          </h3>

          <h3 onClick={(e) => turnThePage(e)}>
            Nuovi Arrivi.........................13
          </h3>

          <h3 onClick={(e) => turnThePage(e)}>
            Offerte..............................22
          </h3>

          <h3 onClick={(e) => turnThePage(e)}>
            Contatti.............................88
          </h3>
        </div>
        <div className="page1 div2">{componentToRender}</div>
        <div className="page0 div2">
          <h2>Benvenuto su Librando!</h2>
          <p>Dove genitori e bambini possono trovare qualcosa da leggere!</p>
          <p>Dai un'occhiata ai link qui di fianco, non te ne pentirai!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
