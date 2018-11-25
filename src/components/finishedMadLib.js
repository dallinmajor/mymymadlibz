import React from 'react';

const FinishedML = ({ reset, ML }) => {
    return (
        <div className='container'>
            <div className='component cursive'>
                {ML}
                <button onClick={e => { e.preventDefault(); reset() }} className="btn btn-primary">Back</button>
            </div>
        </div>
    )
};

export default FinishedML;