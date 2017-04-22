import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import ImagePane from '../Components/ImagePane';

export default class ApodContainer extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="column col-12">
						<Header />
					</div>
				</div>
				<div className="columns">
					<div className="column col-8">
						<ImagePane />
					</div>
					<div className="column col-4">
						<Sidebar />
					</div>
				</div>
			</div>
		);
	}
}
