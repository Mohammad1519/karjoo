import React from 'react';
import { Grid } from 'material-ui';
import { RegularCard, Table, ItemGrid } from 'components';
import DataTable from '../../components/Table/DataTable';

class ContractsManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{ title: 'نام', field: 'name' },
				{ title: 'مهارت', field: 'skill' },
				{ title: 'تحصیلات', field: 'education' },
			],
			data: [
				{ name: 'علی محمدی', skill: 'مهندس نرم افزار', education: 'لیسانس' },
				{
					name: 'سعید عباسی',
					skill: 'مهندس برق',
					education: 'کارشناسی ارشد',
				},
			],
		};
	}
	render() {
		return (
			<Grid container>
				<ItemGrid xs={12} sm={12} md={12}>
					<RegularCard
						cardTitle="Simple Table"
						cardSubtitle="Here is a subtitle for this table"
						content={<DataTable columns={this.state.columns} data={this.state.data} />}
					/>
				</ItemGrid>
			</Grid>
		);
	}
}

export default ContractsManagement;
