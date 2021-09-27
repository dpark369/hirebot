import React, { useState } from 'react';
import './Card.css';

function Card(props) {
	// Used to flip card on click
	const [active, setActive] = useState(false);
	const clickHandler = () => {
		setActive(!isActive);
	};
	return (
		<div className='flip-card tc dib br3 ma2 grow bw2' onClick={clickHandler}>
			<div className={`flip-card-inner ${active ? 'clicked' : null}`}>
				<div className='flip-card-front'>
					<img
						src={`https://robohash.org/${props.id}?size=300x300`}
						alt='robot'
					/>
				</div>
				<div className='flip-card-back'>
					<h2>{props.name}</h2>
					<p>{props.email}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
