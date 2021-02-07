import React, { useState } from "react";
//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/myLogo.svg";

//Redux and routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
    dispatch(fetchSearch(textInput));
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <img src={logo} alt="logo" />
        <span>| games</span>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 50px 0 0 50px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-radius: 0 50px 50px 0;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: bold;
  cursor: pointer;
  img {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.3em;
  }
`;
export default Nav;
