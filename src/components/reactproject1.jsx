
import React, { useContext } from 'react';
import { ThemeContext } from '../components/reactproject';
const ReactProject = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightStyle = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px',
    textAlign: 'center',
    height: '50vh', 
    
    width: '50vw',  
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  };

  const darkStyle = {
    backgroundColor: '#333333',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    height: '50vh', 
    width: '50vw',  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   
  };

  const currentStyle = theme === 'light' ? lightStyle : darkStyle;
  return (
    <div className={`app ${theme}`} style={currentStyle} >
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme} style={{padding:'10px 20px', marginTop:'20px', }}>
      Toggle theme</button>
    </div>
  );
}

export default ReactProject;