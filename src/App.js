import contactsJSON from "./contacts.json";
import "./App.css";
import {useState} from "react";
function App() { 
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5))
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        {contacts.map(({id, name, pictureUrl, popularity}) => {
          return (
            <tbody key={id}>
              <tr>
                <td>
                  <img
                    src={pictureUrl}
                    alt="pictureUrl"
                    width="50px"
                  />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
export default App;