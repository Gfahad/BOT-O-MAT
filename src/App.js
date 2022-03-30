import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

const types = {
  UNIPEDAL: "Unipedal",
  BIPEDAL: "Bipedal",
  QUADRUPEDAL: "Quadrupedal",
  ARACHNID: "Arachnid",
  RADIAL: "Radial",
  AERONAUTICAL: "Aeronautical",
};
const tasks = [
  {
    description: "do the dishes",
    eta: 1000,
  },
  {
    description: "sweep the house",
    eta: 3000,
  },
  {
    description: "do the laundry",
    eta: 10000,
  },
  {
    description: "take out the recycling",
    eta: 4000,
  },
  {
    description: "make a sammich",
    eta: 7000,
  },
  {
    description: "mow the lawn",
    eta: 20000,
  },
  {
    description: "rake the leaves",
    eta: 18000,
  },
  {
    description: "give the dog a bath",
    eta: 14500,
  },
  {
    description: "bake some cookies",
    eta: 8000,
  },
  {
    description: "wash the car",
    eta: 20000,
  },
];
function App() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [robotTask, setRobotTask] = useState(null);

  const doTasks = async () => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    for (let i = 0; i < 5; i++) {
      setRobotTask(tasks[i].description);
      await delay(tasks[i].eta);
    }
  };

  useEffect(() => {
    if (type !== "" && name !== "") {
      doTasks();
    }
  }, [type, name]);

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          var radios = document.getElementsByTagName("input");
          var value;
          for (var i = 0; i < radios.length; i++) {
            if (radios[i].type === "radio" && radios[i].checked) {
              // get value, set checked flag or do whatever you need to
              value = radios[i].value;
            }
          }

          var name = document.getElementById("textbox").value;
          setType(value);
          setName(name);
        }}
      >
        <input type="text" id="textbox"></input>
        <br />
        {Object.values(types).map((type) => (
          <>
            {" "}
            <input type="radio" id={type} name="robotType" value={type} />
            <label>{type}</label>
            <br />
          </>
        ))}

        <input type="submit"></input>
      </form>
      {robotTask && <div>robot Task:{robotTask}</div>}
    </div>
  );
}

export default App;
