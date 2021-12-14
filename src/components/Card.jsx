import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div id={id} className="card bg-light-green dib br3 pa3 m2 grow bw2 shadow">
            <img alt = 'robots' src={`https://robohash.org/${name}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;