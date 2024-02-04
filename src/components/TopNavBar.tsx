import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from '../styles/components/TopNavBar.module.css';

const TopNavBar : React.FC = () => {
	const navigate = useNavigate();

  return (
    <div className={classes.navbar}>
			<div className={classes.logo} onClick={()=> navigate('/')}>
				Logo
			</div>
			<div className={classes.navItems}>
				<div className={classes.navItem}>1</div>
				<div className={classes.navItem}>2</div>
			</div>
			<div className={classes.navIcons}>
				<div className={classes.navIcon}>3</div>
				<div className={classes.navIcon}>4</div>
				<div className={classes.navIcon}>5</div>
			</div>
		</div>
  );
}

export default TopNavBar;
