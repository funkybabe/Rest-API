import React, { useEffect, useState } from 'react';
import './Home.scss';
import Header from '../../Components/Header/Header';
import SearchDiv from '../../Components/SearchDiv/searchDiv';
import CardsDiv from '../../Components/CardsDiv/CardsDiv';
import useFetch from 'react-fetch-hook';
import { data } from '../../Utils/data';

function Home() {
	let search, filter;
	const [newData, setNewData] = useState(data);
	const fetchedData = filter => {
		console.log(filter);
		if (filter == '') {
			setNewData(data);
		} else {
			let d = data.filter(country => country.region == filter);
			setNewData(d);
		}
	};
	const searchedData = search => {
		console.log(search);
		if (search == '' || search == null || search == undefined) {
			setNewData(data);
		} else {
			let d = data.filter(country => country.name == search);
			setNewData(d);
		}
	};

	return (
		<div className="Home">
			<SearchDiv
				searchedData={searchedData}
				data={data}
				fetchedData={fetchedData}
			/>
			<CardsDiv data={newData} />
		</div>
	);
}

export default Home;
