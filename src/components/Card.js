import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return(
        <div className="tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5 card">
            <img alt='robots' src={`https://robohash.org/${id}?set=set3`}/>
            <div>
                <h2 id='robot-name'>{ name }</h2>
                <p id='robot-mail'>{ email }</p>
            </div>
        </div>
    );
}

export default Card;