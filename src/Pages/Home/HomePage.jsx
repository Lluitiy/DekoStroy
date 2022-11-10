import Hero from 'components/Main/Hero/Hero/Hero';
import Consultation from 'components/Main/Conslutation/Consultation/Consultation';
import Strength from 'components/Main/Strength/Strength/Strength';
import Statistics from 'components/Main/Statistics/Statistics';
import Benefits from 'components/Main/Benefits/Benefits.styled';
import Order from 'components/Main/Order/Order';
import Gallery from 'components/Main/Gallery/Gallery/Gallery';
import Faq from 'components/Main/Faq/Faq';

const HomePage = () => {
	return (
		<>
			<Hero />
			<Consultation />
			<Strength />
			<Statistics />
			<Benefits />
			<Order />
			<Gallery />
			<Faq />
		</>
	);
};
export default HomePage;
