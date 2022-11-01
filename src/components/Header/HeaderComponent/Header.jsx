import { useMediaQuery } from 'react-responsive';
import { Container } from 'components/Common/Common.styled';
import { Head, HeadWrapper } from './Header.styled';
import Socials from '../Socials/Socials';
import Logo from '../Logo/Logo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

	return (
		<Head>
			<Container>
				<HeadWrapper>
					<Logo />
					{isDesktop ? null : (
						<>
							<Socials />
						</>
					)}
					<ThemeSwitcher />
				</HeadWrapper>
			</Container>
		</Head>
	);
};

export default Header;
