import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<input
			className='pa3 ba bg-light-blue b--green'
			type='search'
			placeholder='Search Robot'
			onChange={searchChange}
		/>
	);
};

export default SearchBox;
