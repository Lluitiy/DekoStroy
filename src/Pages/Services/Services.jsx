import { Outlet } from 'react-router-dom';
import servisesList from '../../data/services';
import { Container } from 'components/Common/Common.styled';
import {
	HeroBox,
	Title,
	MenuList,
	MenuItem,
	MenuLink,
	ServicesBox,
	ServicesList,
	ServicesItem,
	ServicesLink,
	RoundBox,
	ServicesSpan,
	ImgBox,
	Img,
	ServicesTitle,
} from './Services.styled';

function Services() {
	return (
		<main>
			<HeroBox>
				<Container>
					<Title>Послуги компанії DecoStroy</Title>
					<MenuList>
						<MenuItem>
							<MenuLink to="/">Головна</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink to="/services">Послуги</MenuLink>
						</MenuItem>
					</MenuList>
				</Container>
			</HeroBox>

			<ServicesBox>
				<Container>
					<ServicesList>
						{servisesList.map(({ type, img, src }) => (
							<ServicesItem key={img}>
								<ServicesLink to={src}>
									<ImgBox>
										<Img src={img} alt={type} />
									</ImgBox>
									<RoundBox>
										<ServicesSpan></ServicesSpan>
										<ServicesTitle>{type}</ServicesTitle>
									</RoundBox>
								</ServicesLink>
							</ServicesItem>
						))}
					</ServicesList>
				</Container>
			</ServicesBox>

			<Outlet />
		</main>
	);
}

export default Services;
