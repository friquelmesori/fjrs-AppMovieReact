import { useEffect } from 'react';
import './TextInput.css';

// Sintaxis ({ props... }) error cometido
export const TextInput = ({name, type, placeholder, state}) => {

  useEffect(() => {
    // if(searchInfo !== ""){
        // console.log("state ... ", state);
    // }
  }, [])

    const inputHandler = ({ target }, state) => {

        // const { name, value } = target;
        const { value } = target;

        // state((prevState) => ({
        //     ...prevState, 
        //     [name] : value
        // }));
      // console.log(value);
        // console.log("state ... ", state);
        state(value);
    };

  return (
    <>
        <input className='inputDesign'
            name = {name}
            type = {type}
            placeholder = {placeholder}
            onChange = {(e) => inputHandler (e, state)}
        />
    </>
  )
}
