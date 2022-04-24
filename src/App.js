import './App.css'
import axios from "axios";
import Counter from './components/Counter';
import React, { useEffect, useState } from "react";
function App() {
  const maxvalue = process.env.MAX_COUNT || 1000
  console.log("maxvalue", maxvalue)
  const [value, setValue] = useState(1);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    //loading true
    setLoading(true);

    //get Req
    axios
      .get(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/avish.json"
      )
      .then((response) => {
        let data = response.data;
        console.log("data", data);
        if (data) {
          setValue(data);
        } else {
          setValue(1);
        }
      });
      //loading false after 2sec
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleChange = (val) => {
    //Loading True
    setLoading(true);

    //put Request
    if(value === maxvalue){
      alert("Max Value Reached")
    }else if(value===0 && val===-1){
      alert("Min Value Reached")
    }
    else{
      var newVal = value + val;
      setValue(newVal);
    }
    

    axios
      .put(
        "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",
        {
          avish: newVal,
        }
      )

      .then((response) => {
        console.log("res", response.data);
      });

    getData();
  };
  useEffect(() => {
    //Get Request

    getData();
  }, [value]);

  return (
    <div className="App">
      <Counter handleChange={handleChange} value={value} loading={loading} />
    </div>
  );
}

export default App;
