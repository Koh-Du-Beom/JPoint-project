/*eslint-disable*/
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import UserInfoPage from './pages/UserInfoPage';
import ActivityPage from './pages/ActivityPage';

function App() {
  
  return (
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path='/info' element={<UserInfoPage/>}/>
			<Route path='/activity/:area' element={<ActivityPage/>}/>
				
			<Route path="activity/:area/:activityId" element={<ActivityPage/>}/>
		</Routes>
    
  );
}

export default App;