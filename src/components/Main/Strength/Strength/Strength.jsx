import StrengthList from '../StrengthList/StrengthList';
import { ReactComponent as PhoneIcon } from 'Assets/svg/phone.svg';
import { Section, Container } from 'components/Common/Common.styled';
import { StrengthHeading, StrnegthCallback } from './Strength.styled';

const Strength = () => {
	return (
		<Section>
			<Container>
				<StrengthHeading>
					4 ПРИЧИНИ ДЛЯ ПОЧАТКУ РОБОТИ З <span>Deco Stroy</span>
				</StrengthHeading>
				<StrengthList />
				<StrnegthCallback href="tel:123123123">
					ЗАТЕЛЕФОНУВАТИ <PhoneIcon width={16} height={16} />
				</StrnegthCallback>
			</Container>
		</Section>
	);
};

export default Strength;
