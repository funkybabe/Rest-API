import React from 'react';
import Header from '../../Components/Header/Header';
import './CardDetails.scss';
import Wrapper from '../../Components/Wrapper/Wrapper';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function CardDetails() {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location.state.data.name);
	return (
		<div className="CardDetails">
			<Wrapper>
				<div className="cardDetailsContainer">
					<div className="btnDiv">
						<button
							onClick={() => {
								navigate('/');
							}}>
							<BsArrowLeftShort /> Back
						</button>
					</div>
					<main>
						<img src={location?.state?.data?.flag} alt="flag" />
						<div className="detailsDiv">
							<h1>{location?.state?.data?.name}</h1>
							<div className="details">
								<div className="single">
									<h3>Native Name:</h3>
									<p>{location?.state?.data?.nativeName}</p>
								</div>
								<div className="single">
									<h3>Population:</h3>
									<p>{location?.state?.data?.population}</p>
								</div>
								<div className="single">
									<h3>Region:</h3>
									<p>{location?.state?.data?.region}</p>
								</div>
								<div className="single">
									<h3>Sub-Region:</h3>
									<p>{location?.state?.data?.subregion}</p>
								</div>
								<div className="single">
									<h3>Capital</h3>
									<p>{location?.state?.data?.capital}</p>
								</div>
								<div className="single">
									<h3>Total Level Domain</h3>
									{location?.state?.data?.topLevelDomain?.item}
								</div>
								{location?.state?.data?.currencies[0].name && (
									<div className="single">
										<h3>Currencies</h3>
										<p>{location?.state?.data?.currencies?.name}</p>
									</div>
								)}
								<div className="single">
									<h3>languages</h3>
									{location?.state?.data?.languages.map((lang, id) => (
										<p key={id}>{lang.name}</p>
									))}
								</div>
							</div>
							{location?.state?.data?.borders && (
								<div className="footer">
									<h3>Border Countries:</h3>
									<div className="btnDiv">
										{location?.state?.data?.borders.map((item, id) => (
											<span key={id}>{item}</span>
										))}
									</div>
								</div>
							)}
						</div>
					</main>
				</div>
			</Wrapper>
		</div>
	);
}

export default CardDetails;
