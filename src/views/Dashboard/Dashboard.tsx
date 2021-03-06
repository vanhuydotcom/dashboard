import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Store from '@material-ui/icons/Store';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import GridItem from '../../components/Grid/GridItem';
import GridContainer from '../../components/Grid/GridContainer';
import Table from '../../components/Table/Table';
import Tasks from '../../components/Tasks/Tasks';
import CustomTabs from '../../components/CustomTabs/CustomTabs';
import Danger from '../../components/Typography/Danger';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardIcon from '../../components/Card/CardIcon';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import { bugs, website, server } from '../../variables/general';

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from '../../variables/charts';

import dashboardStyle from '../../assets/jss/material-dashboard-react/views/dashboardStyle';

interface Props {
  classes: any;
}

interface State {
  value: number;
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }
  handleChange = (event: any, value: number) => {
    this.setState({ value });
  }

  handleChangeIndex = (index: number) => {
    this.setState({ value: index });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <GridContainer xs={12} sm={12} md={8}>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart={true}>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                // listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Danh thu</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 1 tri???u
                  </span>{' '}
                  {/* increase in today sales. */}
                </p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime /> C???p nh???p 20 ph??t tr?????c
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart={true}>
              <CardHeader color="info">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                // data={emailsSubscriptionChart.data}
                // type="Bar"
                // options={emailsSubscriptionChart.options}
                // responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                // listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>T???ng ????n H??ng</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 1
                  </span>{' '}
                </p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime />  C???p nh???p 20 ph??t tr?????c
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card chart={true}>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                // listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart={true}>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        */}
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <CustomTabs
              title="Tasks:"
              headerColor="warning"
              tabs={[
                {
                  tabName: 'Bugs',
                  tabIcon: BugReport,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={bugs}
                    />
                  )
                },
                {
                  tabName: 'Website',
                  tabIcon: Code,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: 'Server',
                  tabIcon: Cloud,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="warning">
                <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
                <p className={classes.cardCategoryWhite}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="warning"
                  tableHead={['ID', 'Name', 'Salary', 'Country']}
                  tableData={[
                    ['1', 'Dakota Rice', '$36,738', 'Niger'],
                    ['2', 'Minerva Hooper', '$23,789', 'Cura??ao'],
                    ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                    ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

      </>
    );
  }
}

// Dashboard.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(dashboardStyle)(Dashboard);
