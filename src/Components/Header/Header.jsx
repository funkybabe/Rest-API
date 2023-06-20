import React from 'react';
import './Header.scss';
import Wrapper from '../Wrapper/Wrapper';
import { BsFillMoonFill } from 'react-icons/bs';

function Header({ switchTheme }) {
	return (
		<div className="Header">
			<Wrapper>
				<div className="HeaderContainer">
					<h1>Where in the World?</h1>
					<div className="mode" onClick={switchTheme}>
						<BsFillMoonFill className="icon" />
						<p>Dark Mode</p>
					</div>
				</div>
			</Wrapper>
		</div>
	);
}

export default Header;
