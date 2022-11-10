import Footer from 'components/Footer/Footer/Footer';
import Header from 'components/Header/HeaderComponent/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
export default Layout;
