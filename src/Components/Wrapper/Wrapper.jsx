import React, { useEffect } from 'react';
import './Wrapper.scss';

function Wrapper(props) {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return <div className="Wrapper">{props.children}</div>;
}

export default Wrapper;
