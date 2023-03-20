import React, { useState, useEffect } from "react";
import List from "./List";

function DataProvider({ url, render }) {
  // hook which triggers after component is mount ?

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => json.results)
      .then((people) => people.map((person) => person.name.first))
      .then((names) => {
        console.log(names);
        setData(names);
      });
  }, []);

  return render(data);
}

export default DataProvider;
