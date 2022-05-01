import logo from './img/marina.png';
import './App.css';
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'

function App() {
  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
  ];
  var data = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made with <code><i class="fa-solid fa-heart"></i></code> by <a href="https://github.com/ErginDapaj" target="_blank" className="App-link" rel="noopener noreferrer">Ergin</a>.
        </p>
      </header>
      <ReactTabulator
        data={data}
        columns={columns}
        layout={"fitData"}
      />
    </div>

  );
}

export default App;
