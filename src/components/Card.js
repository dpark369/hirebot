import React from 'react';
import './Card.css';

function Card(props) {
	return (
		<div className='flip-card tc dib br3 ma2 grow bw2 '>
			<div className='flip-card-inner'>
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
