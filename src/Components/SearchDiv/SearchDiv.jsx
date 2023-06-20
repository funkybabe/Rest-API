import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import './SearchDiv.scss';
import { BsSearch } from 'react-icons/bs';

function SearchDiv({ searchedData, data, fetchedData }) {
	return (
		<div className="searchDiv">
			<Wrapper>
				<div className="searchContainer">
					<form action="">
						<div className="search">
							<BsSearch className="icon" />
							<input
								type="text"
								onChange={e => {
									let search = e.target.value;
									console.log(e);
									searchedData(search);
								}}
								className="searchInput"
							/>
						</div>
					</form>
					<form>
						<select
							name="filter"
							id="filter"
							onChange={e => {
								let filter = e.target.value;
								fetchedData(filter);
							}}
							className="filter">
							<option value="">Filter by Region</option>
							{data.map((country, id) => (
								<option key={id} value={country.region}>
									{country.region}
								</option>
							))}
						</select>
					</form>
				</div>
			</Wrapper>
		</div>
	);
}

export default SearchDiv;
