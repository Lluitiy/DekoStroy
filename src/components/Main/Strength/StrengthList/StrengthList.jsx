import strengths from 'data/strength.js';
import { useMediaQuery } from 'react-responsive';
import {
	StrengthImg,
	StrengthItem,
	StrengthItemText,
	StrengthsList,
	StrengthWrapper,
	StrngthItemHeading,
} from './StrengthList.styled';

const StrengthList = () => {
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	return (
		<StrengthsList>
			{strengths.map(({ img, header, text }) => (
				<StrengthItem key={header}>
					<StrengthImg
						src={img}
						alt={header}
						width={!isTablet ? 288 : !isDesktop ? 336 : 400}
					/>
					<StrengthWrapper>
						<StrngthItemHeading>{header}</StrngthItemHeading>
						<StrengthItemText>{text}</StrengthItemText>
					</StrengthWrapper>
				</StrengthItem>
			))}
		</StrengthsList>
	);
};

export default StrengthList;
