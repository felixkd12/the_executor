import style from './App.module.css';

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true} 
]

  return (
    <div className={style.App}>
      {planets.map(
        (planets, key) => planets.isGasPlanet && <h1> {planets.name} </h1>
      )}
    </div>
  );
}

export default App;