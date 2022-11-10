import { Formik } from 'formik';
import { consultationFormSchema } from 'Utils/validation';
import {
	ConsultButton,
	ConsultError,
	ConsultForm,
	ConsultInput,
	ConsultLabel,
} from './ConsultationForm.styled';

const ConsultationForm = () => {
	const onSubmitForm = (values, { resetForm }) => {
		console.log('values', values);
		const newContact = {
			name: values.name,
			phone: values.phone,
		};
		console.log('newContact', newContact);
		resetForm();
		return;
	};
	const initialValues = {
		name: '',
		phone: '',
	};

	return (
		<Formik
			onSubmit={onSubmitForm}
			initialValues={initialValues}
			validationSchema={consultationFormSchema}
		>
			<ConsultForm>
				<ConsultLabel htmlFor="name">
					Ваше Ім'я
					<ConsultInput name="name" type="text" />
					<ConsultError name="name" component="div" />
				</ConsultLabel>
				<ConsultLabel htmlFor="phone">
					Телефон
					<ConsultInput name="phone" type="number" />
					<ConsultError name="phone" component="div" />
				</ConsultLabel>
				<ConsultButton type="submit">Надіслати</ConsultButton>
			</ConsultForm>
		</Formik>
	);
};

export default ConsultationForm;
