import { useCountUp } from 'react-countup';
import { Container, Hidden, Section } from 'components/Common/Common.styled';
import {
	StatCounter,
	StatItem,
	StatList,
	StatText,
	StatWrapper,
} from './Statistics.styled';

const Statistics = () => {
	useCountUp({
		ref: 'counter-remont',
		end: 1039,
		enableScrollSpy: true,
	});
	useCountUp({
		ref: 'counter-design',
		end: 4310,
		enableScrollSpy: true,
	});
	useCountUp({
		ref: 'counter-build',
		end: 35,
		enableScrollSpy: true,
	});
	useCountUp({
		ref: 'counter-clients',
		end: 1000,
		enableScrollSpy: true,
	});
	return (
		<StatWrapper>
			<Section>
				<Container>
					<Hidden>Statistics</Hidden>
					<StatList>
						<StatItem>
							<StatCounter id="counter-remont"></StatCounter>
							<StatText>РЕМОНТІВ КВАРТИР</StatText>
						</StatItem>
						<StatItem>
							<StatCounter id="counter-design"></StatCounter>
							<StatText>РОЗРОБЛЕНИХ ДИЗАЙНІВ</StatText>
						</StatItem>
						<StatItem>
							<StatCounter id="counter-build"></StatCounter>
							<StatText>ПОБУДОВАНИХ БУДИНКІВ ТА КОТЕДЖІВ</StatText>
						</StatItem>
						<StatItem>
							<StatCounter id="counter-clients"></StatCounter>
							<StatText>ЗАДОВОЛЕНИХ КЛІЄНТІВ</StatText>
						</StatItem>
					</StatList>
				</Container>
			</Section>
		</StatWrapper>
	);
};

export default Statistics;
