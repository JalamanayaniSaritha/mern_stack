import { useEffect, useState } from "react";
import axios from "axios";

function Spiderman() {
  const [Spidy, setSpidy] = useState([]);

  useEffect(() => {
    loadSpidy();
  }, []);

  async function loadSpidy() {
    try {
      const response = await axios.get("http://localhost:5000/Spidy_Day");
      setSpidy(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  async function AddSpidy() {
    const Spider={
        name:"Miles",
        movie:"Into Spider Verse"
    };
    const response=await axios.post("http://localhost:5000/Spidy_Day",Spider);
    console.log(response.data);
    console.log("Welcome to spider verse")
    
  }

  return (
    <div>
      <h1>SpiderMan's</h1>

      <table border="1">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Hero</th>
            <th>movies</th>
          </tr>
        </thead>

        <tbody>
          {Spidy.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.movie}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={AddSpidy}>
        Add Spidy
      </button>
    </div>
  );
}

export default Spiderman;