import React from 'react';
import './CardsDiv.scss';
import Wrapper from '../Wrapper/Wrapper';
import Card from './Card/Card';

function CardsDiv({ data }) {
	const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	return (
		<div className="CardsDiv">
			<Wrapper>
				<div className="CardsContainer">
					{data.map((item, id) => (
						<Card item={item} key={id} />
					))}
				</div>
			</Wrapper>
		</div>
	);
}

export default CardsDiv;
