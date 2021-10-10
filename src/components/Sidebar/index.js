import React, {useState, useEffect, useRef} from 'react';
import * as Scroll from 'react-scroll';
import SearchBar from '../SearchBar';

import {Wrapper, Content} from './SideBar.styles';

let scroll    = Scroll.animateScroll;

const SideBar = ({setSearchTerm}) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  
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
        <SearchBar setSearchTerm = {setSearchTerm}/>
        <h2 onClick={() => setState('Most-Popular')}>Most Popular</h2>
        <h2 onClick={() => setState('Airing-Today')}>Airing Today</h2>
        <h2 onClick={() => setState('Trending-Today')}>Trending Today</h2>
        <h2 onClick={() => setState('Trending-Weekly')}>Trending This Week</h2>
        <h2 onClick={() => setState('Top-Rated')}>Top-Rated</h2>
      </Content>
    </Wrapper>
  );
};
export default SideBar; 