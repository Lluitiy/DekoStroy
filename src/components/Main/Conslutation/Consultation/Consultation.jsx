import { Container, Section } from 'components/Common/Common.styled';
import ConsultationForm from '../ConsultationForm/ConsultationForm';
import {
	ConsultationWrapper,
	ConsultationHeader,
	ConsultationText,
} from './Consultation.styled';
const Consultation = () => {
	return (
		<ConsultationWrapper>
			<Section>
				<Container>
					<ConsultationHeader>ремонт квартир в одесі</ConsultationHeader>
					<ConsultationText>
						Отримайте безкоштовний розрахунок ціни ремонтних робіт квартири та
						збережіть ваш бюджет завдяки акційним пропозиціям компанії!
					</ConsultationText>
					<ConsultationForm />
				</Container>
			</Section>
		</ConsultationWrapper>
	);
};

export default Consultation;
