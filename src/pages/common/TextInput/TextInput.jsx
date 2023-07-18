import './TextInput.css';

export const TextInput = (type, placeholder, name, state) => {

    const inputHandler = ({ target }, state) => {

        // const { name, value } = target;
        const { value } = target;

        // state((prevState) => ({
        //     ...prevState, 
        //     [name] : value
        // }));

        state(value);
    };

  return (
    <>
        <input className='inputDesign'
            type = {type}
            placeholder = {placeholder}
            name = {name}
            onChange = {(e) => inputHandler (e, state)}
        />
    </>
  )
}
