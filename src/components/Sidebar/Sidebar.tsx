import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

// core components
import AdminNavbarLinks from '../Navbars/AdminNavbarLinks';
// import RTLNavbarLinks from '../Navbars/RTLNavbarLinks';

import sidebarStyle from '../../assets/jss/material-dashboard-react/components/sidebarStyle';


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     nested: {
//       paddingLeft: theme.spacing(4),
//     },
//   }),
// );
const Sidebar = ({ ...props }) => {
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName: any) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  const { classes, color, logo, image, logoText, routes, orderRoutes, transportRoutes } = props;
  const [toggleOrder, setToggleOrder] = React.useState(false);
  const [toggleTransport, setToggleTransport] = React.useState(false);
  const _clickOrder = () => {
    setToggleOrder(!toggleOrder)
  };
  const _clickTransport = () => {
    setToggleTransport(!toggleTransport)
  };
  var links = (
    <List className={classes.list}>
      {routes.map((prop: any, key: any) => {
        let child = prop.children
        var activePro = ' ';
        var listItemClasses;
        if (prop.path === '/upgrade-to-pro') {
          activePro = classes.activePro + ' ';
          listItemClasses = classNames({
            [' ' + classes[color]]: true
          });
        } else {
          listItemClasses = classNames({
            [' ' + classes[color]]: activeRoute(prop.layout + prop.path)
          });
        }
        const whiteFontClasses = classNames({
          [' ' + classes.whiteFont]: activeRoute(prop.layout + prop.path)
        });
        return (
          <NavLink
            to={prop.layout + prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button={true} className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === 'string' ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses, {
                    [classes.itemIconRTL]: props.rtlActive
                  })}
                />
              )}
              <ListItemText
                primary={prop.name}
                className={classNames(classes.itemText, whiteFontClasses, {
                  [classes.itemTextRTL]: props.rtlActive
                })}
                disableTypography={true}

              />
              {/* {
                prop.children && prop.children !== null ?
                  <div>
                    {toggle ? <ExpandLess /> : <ExpandMore />}
                  </div>
                  : ""
              } */}
            </ListItem>
            {/* {
              child ?
                <Collapse in={toggle} timeout="auto" unmountOnExit >
                  <List component="div" disablePadding >

                    <NavLink
                      to={child[0].layout + child[0].path}
                      className={activePro + classes.item}
                      activeClassName="active"
                    // key={key}
                    >
                      <ListItem button className={classes.itemLink + listItemClasses} >
                        <ListItemText primary={child[0].name} className={classNames(classes.itemText, whiteFontClasses, {
                          [classes.itemTextRTL]: props.rtlActive
                        })}
                          disableTypography={true} />
                      </ListItem>
                    </NavLink>
                    <NavLink
                      to={child[1].layout + child[1].path}
                      className={activePro + classes.item}
                      activeClassName="active"
                    // key={key}
                    >
                      <ListItem button className={classes.itemLink + listItemClasses} >
                        <ListItemText primary={child[1].name} className={classNames(classes.itemText, whiteFontClasses, {
                          [classes.itemTextRTL]: props.rtlActive
                        })}
                          disableTypography={true} />
                      </ListItem>
                    </NavLink>
                  </List>
                </Collapse>
                : ""
            } */}
          </NavLink>
        );
      })}

    </List >

  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="/"
        className={classNames(classes.logoLink, {
          [classes.logoLinkRTL]: props.rtlActive
        })}
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
  return (
    <>
      <Hidden mdUp={true} implementation="css">
        <Drawer
          variant="temporary"
          anchor={props.rtlActive ? 'left' : 'right'}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            {props.rtlActive ? null : <AdminNavbarLinks />}
            {links}
          </div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
      <Hidden smDown={true} implementation="css">
        <Drawer
          anchor={props.rtlActive ? 'right' : 'left'}
          variant="permanent"
          open={true}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: props.rtlActive
            })
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>{links}</div>
          {image !== undefined ? (
            <div
              className={classes.background}
              style={{ backgroundImage: 'url(' + image + ')' }}
            />
          ) : null}
        </Drawer>
      </Hidden>
    </>
  );
};

// Sidebar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(sidebarStyle)(Sidebar);
