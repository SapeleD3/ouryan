import React from 'react';

const loader = {
	display: 'flex',
	backgroundColor: 'F6F1F1',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
	width: '100vw',
};

// eslint-disable-next-line react/prop-types
export default function Loading({children}) {
	return <div style={{...loader}}>{children}</div>;
}
