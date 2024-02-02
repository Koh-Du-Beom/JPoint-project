import React, {useState} from 'react';
import TopNavBar from '../components/TopNavBar';
import RightNavBar from '../components/RightNavBar';
import classes from '../styles/layouts/MainLayout.module.css';
import BottomNavBar from '../components/Footer/BottomNavBar';
import BottomInfo from '../components/Footer/BottomInfo';
import FinalCheckModal from '../components/FinalCheckModal';
import { useEffect } from 'react';

const MainLayout: React.FC<{children : React.ReactNode}> = ({children}) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // rightNavBarWrapper의 스타일을 동적으로 조정하기 위한 객체
  const rightNavBarStyle = {
    transform: `translateY(${scrollY}px)`,
    transition: 'transform 0.5s ease-out',
  };

  return (
    <div className={classes.mainLayout}>    
      <TopNavBar/>
      <div className={classes.content}>
				<div className={classes.childrenWrapper}>{children}</div>
				<div className={classes.rightNavBarWrapper} style={rightNavBarStyle}><RightNavBar/></div>
				{ isModalOpen ? <FinalCheckModal onClose={closeModal}/> : null }
				
      </div>	
			<BottomNavBar openModal={openModal}/>
			<BottomInfo/>
    </div>
  )
}

export default MainLayout;