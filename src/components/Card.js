import React from 'react';

function Card(props) {
	return (
		<div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${props.id}?size=300x300`} alt='robot' />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
			</div>
		</div>
	);
}

export default Card;
