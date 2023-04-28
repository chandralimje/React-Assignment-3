import "./App.css";
import Card from "./components/Card";
import State from "./components/State";

function App() {
  let name = ["Prakash", "Prem", "Shubham", "Dinesh", "Raj", "Surabha"];

  return (
    <div>
      {name.map((value, index) => {
        return <Card name={value} key={index} />
        
      })}

      <State />
      
    </div>
  );
}

export default App;
