import {
	HeroItem,
	HeroItemImgWrapper,
	HeroItemWrapper,
	HeroLink,
	HeroList,
} from './ServiceList.styled';
import testIMG from 'Assets/img/MainHero/design-card.png';
import testIMG2 from 'Assets/img/MainHero/repair-card.png';
import { Container } from 'components/Common/Common.styled';

const ServiceList = () => {
	return (
		<Container>
			<HeroList>
				<HeroItem>
					<HeroItemWrapper>
						<p>Des</p>
						<HeroLink to="/services/interiorDesign">Дізнатись Більше</HeroLink>
					</HeroItemWrapper>
					<HeroItemImgWrapper>
						<img src={testIMG} alt="qwe" height={120} width={150} />
					</HeroItemImgWrapper>
				</HeroItem>
				<HeroItem>
					<HeroItemWrapper>
						<p>res</p>
						<HeroLink>Дізнатись Більше</HeroLink>
					</HeroItemWrapper>
					<HeroItemImgWrapper>
						<img src={testIMG2} alt="qwe" height={120} width={150} />
					</HeroItemImgWrapper>
				</HeroItem>
				<HeroItem>
					<HeroItemWrapper>
						<p>pri</p>
						<HeroLink>Дізнатись Більше</HeroLink>
					</HeroItemWrapper>
					<HeroItemImgWrapper>
						<img src={testIMG} alt="qwe" height={120} width={150} />
					</HeroItemImgWrapper>
				</HeroItem>
				<HeroItem>
					<HeroItemWrapper>
						<p>cont</p>
						<HeroLink>Дізнатись Більше</HeroLink>
					</HeroItemWrapper>
					<HeroItemImgWrapper>
						<img src={testIMG2} alt="qwe" height={120} width={150} />
					</HeroItemImgWrapper>
				</HeroItem>
			</HeroList>
		</Container>
	);
};

export default ServiceList;
