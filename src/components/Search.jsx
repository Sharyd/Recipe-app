import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  width: 70%;
  margin: 0rem auto;
  position: relative;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.3rem;
    color: white;
    padding: 0.6rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export default Search;
