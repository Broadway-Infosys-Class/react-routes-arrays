import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "myClass": {
    textAlign: "right"
  }
})

const RenderArrays = () => {

  const classes = useStyles();
    interface lists {
        message: string,
        done: boolean
    }

  const myList = [
    { message: "This is first item", done: false },
    { message: "This is second item", done: false },
    { message: "This is third item", done: false },
  ];

  const inputChange = (event: any) => {
    //to stop the input from making some changes to UI
    event.persist();

    // console.log(event.target.value);
    setItem({...item, message: event.target.value})
    console.log(item);
  }

  const initialObject = {
    message: "",
    done: false
  }

  const handleSubmit = () =>{
    let newArray = listItems;
    newArray.push(item)
    console.table(newArray);
    setListItems(newArray);
  }

  const [listItems, setListItems] = useState(myList as lists[])
  const [item, setItem] = useState(initialObject as lists)

  return (<div>
      <ul>
      {listItems.map((item)=> (
          <li>{item.message}</li>
      ))}
      </ul>

      <input className={classes.myClass} id="textInput" name="message" type = "text" onChange={inputChange}/>
      <button onClick={handleSubmit}>Add Me</button>
  </div>);
};

export default RenderArrays;
