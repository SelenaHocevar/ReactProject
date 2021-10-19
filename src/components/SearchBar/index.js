import React, {useState, useEffect, useRef} from "react";
import * as Scroll from 'react-scroll';
//Image
import searchIcon from '../../images/search-icon.svg';
// Styles
import {Wrapper, Content} from './SearchBar.styles';

let scroll    = Scroll.animateScroll;

const SearchBar = ({ setSearchTerm }) => {
  /*
  We call it inside a function component to add some local state to it. 
  React will preserve this state between re-renders. useState returns a pair: 
  the current state value and a function that lets you update it.
  */
  const [state, setState] = useState('');

  /* 
  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
  The returned object will persist for the full lifetime of the component. 
  */
  const initial = useRef(true);

  /* The Effect Hook, useEffect, adds the ability to perform side effects from a function component. */
  useEffect(() => {
    if(initial.current){
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
      scroll.scrollTo(500);
    }, 650)

    return () => clearTimeout(timer)
  },[setSearchTerm, state])

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search Shows'
          onChange={event => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;