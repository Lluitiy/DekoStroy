import Layout from 'Layout/Layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <Route index element={<HomePage/> } /> */}
			</Route>
		</Routes>
	);
};

export default App;
