import React, { Component } from 'react';

class BugSort extends Component{

	sortBy = '';
	isDescending = false;

	onSortChange = (evt) => {
		this.sortBy = evt.target.value;
		this.props.sort(this.props.bugs, this.sortBy, this.isDescending);
	}
	onOrderChange = (evt) => {
		this.isDescending = evt.target.checked;
		this.props.sort(this.props.bugs, this.sortBy, this.isDescending);
	}
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select onChange={this.onSortChange}>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
					<option value="createdAt">Date</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" onChange={this.onOrderChange} />
			</section>
		)
	}
}

export default BugSort;