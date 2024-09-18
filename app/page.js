const App = function () {
  var user_name = "Kevin";
  var ele_1 = (
    //html elements
    <div>
      <h1>Hello, {user_name} </h1>
      <h2>Good morning</h2>
      <p>Welcome back Mr.{user_name} nice to meet you once again </p>
      <img src="images/messi-world-cup.jpg" width="200px" />

      <h4>My Achievements</h4>
      <ol>
        <li>Learnt web development since 2018</li>
        <li>Learnt mobile app since 2020</li>
      </ol>
      <input />
      <button>Get Started Now</button>
      <br></br>
      <input />
      <button>
        <i>enroll now</i>
      </button><br/>
      <input/>
      <button>Write your suggestions for programmer Kevin</button><br/>

      <a href="/math">Calculator</a> <br/>

      <a href="/calculator">my assignment</a><br/>

      <a href="/phone">Go to phone app</a>
    </div>
  );

  return ele_1;
};

export default App;
