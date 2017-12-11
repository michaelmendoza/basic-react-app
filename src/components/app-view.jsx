import React from 'react';
import ReactDOM from 'react-dom';

class AppView extends React.Component {

	render() {
		return <section className='app-view'>  
			<div>
				React Seed
			</div>
		</section>
	}
}

ReactDOM.render(<AppView/>, document.getElementById('app-view'));