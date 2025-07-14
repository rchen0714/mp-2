import {useEffect, useState} from "react";
import styled from "styled-components";

export default function App(){

  const [ , ] = useState();
  useEffect(() => {
    async function fetchData() {
      const rawData = await fetch();
      const data = await rawData.json();
      setData(data);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, );

  return (
    <>

    </>
  );

}
