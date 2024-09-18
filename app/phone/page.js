import "./phone.css";

const CallDisplay = function(){
    return (
      <div className="dark-bg">
        <h1>My phone app</h1>
        <p>Below is the display page</p>
        <div className="phone-bg">
          <button className="white-button">1</button>
          <button className="white-button">2</button>
          <button className="white-button">3</button>
        </div>
      </div>
    );
};

export default CallDisplay;