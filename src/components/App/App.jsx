import Layout from 'Layout/Layout';
import HomePage from 'Pages/Home/HomePage';
import InteriorDesign from 'Pages/InteriorDesign/InteriorDesign';
import Services from 'Pages/Services/Services';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="services" element={<Services />} />
				<Route path="services/interiorDesign" element={<InteriorDesign />} />
			</Route>
		</Routes>
	);
};

export default App;
