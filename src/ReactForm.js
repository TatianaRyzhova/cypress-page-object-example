import React, {useState} from "react";

import {Loader} from "./Loader";

export function ReactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setDisabled(true);

    setTimeout(() => {
      // alert("Hi, I was submitted :)");

      setState({
        name: '',
        email: '',
        message: ''
      });

      setIsLoading(false);
      setDisabled(false);
    }, 5000)

  }

  const handleChange = (e) => {
    const input = e.target;
    const value = input.value;
    const name = input.name;
    setState({
      ...state,
      [name]: value
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className="inputData">
          <label>Name: </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>

        <div className="inputData">
          <label> Email: </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>

        <div className="inputData">
          <label>Message: </label>
          <textarea
            required
            id="message"
            name="message"
            value={state.message}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>

        <button type="submit" id="submitButton"> Submit</button>
      </form>

      <div> {isLoading ? <Loader/> : ''} </div>
    </div>
  );
}