import React from 'react';

const MadLibCreator = ({handleInputChange, handleMadLibSubmit, text}) => {
    return (
        <div className='container'>
            <div className='component'>
                <div className='madlib'>My My Madlib</div>
                <h6>Example:</h6>
                <p className='cursive'>{'There once was a <ADJECTIVE> <MYTHICAL BEAST>. Who lived in a <PLACE>...'}</p>
            </div>
            <div className='component'>
            <form>
                <textarea rows='5' value={text} onChange={e => handleInputChange(e)}/>
                <button onClick={e => {e.preventDefault(); handleMadLibSubmit()}} className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
};

export default MadLibCreator;