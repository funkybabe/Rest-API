import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
	const navigate = useNavigate();
	const handleClick = () => {
		console.log('clicked');
		navigate('./CardDetails', { state: { data: item } });
	};
	return (
		<div>
			<div
				className="Card"
				onClick={() => {
					handleClick();
				}}>
				<img src={item?.flag} alt="" />
				<div className="cardDesc">
					<h2>{item?.name}</h2>
					<div className="moreDesc">
						<h3>Population:</h3>
						<p>{item.population}</p>
					</div>
					<div className="moreDesc">
						<h3>Region:</h3>
						<p>{item.region}</p>
					</div>
					<div className="moreDesc">
						<h3>Capital:</h3>
						<p>{item.capital}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
