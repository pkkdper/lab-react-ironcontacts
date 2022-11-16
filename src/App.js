import contactsJSON from "./contacts.json";
import "./App.css";
import { useState } from "react";
function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(5, 10));
  function sortBypopularity(contactsJSON, byPopularity) {
    let sortedData;
    if (byPopularity === "popularity") {
      sortedData = contactsJSON.sort(function (a, b) {
        return a.popularity - b.popularity;
      });
    }
    return sortedData;
  }
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button
        onClick={() => {
          const newContact =
            contactsJSON[Math.floor(Math.random() * contactsJSON.length)];
          setContacts([...contacts, newContact]);
        }}
      >
        Add Random Contact
      </button>
      <button onClick={() => {
        sortBypopularity()
      }}>Sort by Popularity</button>
      <button>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        {contacts.map(
          ({ id, name, pictureUrl, popularity, wonOscar, wonEmmy }) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>
                    <img src={pictureUrl} alt="pictureUrl" width="50px" />
                  </td>
                  <td>{name}</td>
                  <td>{popularity.toFixed(2)}</td>
                  {/* <td>{if (wonOscar) {yes}}</td> */}
                  {wonOscar ? <td>🏆 </td> : <td></td>}
                  {wonEmmy ? <td>🏆 </td> : <td></td>}
                </tr>
              </tbody>
            );
          }
        )}
      </table>
    </div>
  );
}
export default App;
