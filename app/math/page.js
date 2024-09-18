import "./math.css";

const MathGame = function(){
    return (
      <div>
        <h1>My caculator page</h1>
        <p>Below is the calculator</p>
        <div className="calculator-bg">
            <p className="screen">0</p>
          <button className="silver-button">AC</button>
          <button className="silver-button">+/-</button>
          <button className="silver-button">%</button>
          <button className="gold-button">÷</button>
          <button className="light-button">7</button>
          <button className="light-button">8</button>
          <button className="light-button">9</button>
          <button className="gold-button">x</button>
          <button className="light-button">4</button>
          <button className="light-button">5</button>
          <button className="light-button">6</button>
          <button className="gold-button">-</button>
          <button className="light-button">1</button>
          <button className="light-button">2</button>
          <button className="light-button">3</button>
          <button className="gold-button">+</button>
          <button className="zero-button">0</button>
          <button className="light-button">.</button>
          <button className="gold-button">=</button>
        </div>
      </div>
    );
}


export default MathGame;