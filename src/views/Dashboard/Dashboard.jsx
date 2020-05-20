import React from 'react';
import PropTypes from 'prop-types';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import {
	ContentCopy,
	Store,
	InfoOutline,
	Warning,
	DateRange,
	LocalOffer,
	Update,
	ArrowUpward,
	AccessTime,
	Accessibility,
	Person,
	Work,
	Image,
} from '@material-ui/icons';
import { withStyles, Grid } from 'material-ui';

import { StatsCard, ChartCard, TasksCard, RegularCard, Table, ItemGrid } from 'components';

import { dailySalesChart, emailsSubscriptionChart, completedTasksChart } from 'variables/charts';

import dashboardStyle from 'assets/jss/material-dashboard-react/dashboardStyle';

class Dashboard extends React.Component {
	state = {
		value: 0,
	};
	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};
	render() {
		return (
			<div>
				<Grid container>
					<ItemGrid xs={12} sm={6} md={3}>
						<StatsCard
							icon={Person}
							iconColor="red"
							title="ثبت نام اولیه"
							description="۸۷"
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={6} md={3}>
						<StatsCard
							icon={Work}
							iconColor="orange"
							title="کار جویان"
							description="۲۰۰"
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={6} md={3}>
						<StatsCard
							icon={Person}
							iconColor="red"
							title="کار فرمایان"
							description="۸۷"
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>

					<ItemGrid xs={12} sm={6} md={3}>
						<StatsCard
							icon={Accessibility}
							iconColor="green"
							title="قرارداد ها"
							description="۳۴۵"
							statIcon={Update}
              statText="به روز رسانی"
            
						/>
					</ItemGrid>
				</Grid>
				<Grid container>
					<ItemGrid xs={12} sm={12} md={4}>
						<ChartCard
							chart={
								<ChartistGraph
									className="ct-chart"
									data={dailySalesChart.data}
									type="Line"
									options={dailySalesChart.options}
									listener={dailySalesChart.animation}
								/>
							}
							chartColor="green"
							title="بازدید روزانه "
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={12} md={4}>
						<ChartCard
							chart={
								<ChartistGraph
									className="ct-chart"
									data={emailsSubscriptionChart.data}
									type="Bar"
									options={emailsSubscriptionChart.options}
									responsiveOptions={emailsSubscriptionChart.responsiveOptions}
									listener={emailsSubscriptionChart.animation}
								/>
							}
							chartColor="orange"
							title="آمار ثبت نام"
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>
					<ItemGrid xs={12} sm={12} md={4}>
						<ChartCard
							chart={
								<ChartistGraph
									className="ct-chart"
									data={completedTasksChart.data}
									type="Line"
									options={completedTasksChart.options}
									listener={completedTasksChart.animation}
								/>
							}
							chartColor="red"
							title="آمار جستجو"
							statIcon={Update}
							statText="به روز رسانی"
						/>
					</ItemGrid>
				</Grid>
				<Grid container>
					{/* <ItemGrid xs={12} sm={12} md={6}>
            <TasksCard />
          </ItemGrid> */}
					<ItemGrid xs={12} sm={12} md={6}>
						<RegularCard
							headerColor="orange"
							cardTitle="آخرین ثبت نام ها"
							content={
								<Table
									tableHeaderColor="warning"
									tableHead={['ID', 'نام', 'مهارت', 'تحصیلات']}
									tableData={[
										['۱', 'علی محمدی', 'برقکار', 'لیسانس'],
										['۲', 'رضا علیپور', 'مهندس نرم افزار', 'ارشد'],
										['۳', 'محمد سعیدی', 'خدمات', 'دیپلم'],
										['۴', 'آرش خداداد', 'آشپز', 'لیسانس'],
									]}
								/>
							}
						/>
					</ItemGrid>
				</Grid>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(dashboardStyle)(Dashboard);
