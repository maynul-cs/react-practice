import React from 'react'

const ConditionalStyle = () => {
    const [isSpecial, setIsSpecial] = React.useState(false);

    const toggleButton = () => {
        setIsSpecial(!isSpecial);
    }

    const commonStyle = {
        padding: '10px',
        fontWeight: 'bold',
        border: '2px solid black',
        backgroundColor: isSpecial ? 'green' : 'white',
        color: isSpecial ? 'white' : 'black',
        borderRadius: isSpecial ? '10px' : '0px',
        fontSize: isSpecial ? '30px' : '16px',
    };

    const specialText = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    };
      const normalText = {
        fontWeight: 'bold',
        fontSize: '20px'
    };


  return (
    <div>
        <button onClick={toggleButton}>
            Make It {isSpecial ? 'Normal' : 'Special'} </button>
        <div style={commonStyle}>
            This is a {isSpecial ? <span style={specialText}> Special </span> : <span style={normalText}>Normal</span>}
        </div>
    </div>
  )
}

export default ConditionalStyle