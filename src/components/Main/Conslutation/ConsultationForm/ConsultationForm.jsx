import { Formik } from 'formik';
import { consultationFormSchema } from 'Utils/validation';
import { send } from 'emailjs-com';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
	ConsultButton,
	ConsultError,
	ConsultForm,
	ConsultInput,
	ConsultLabel,
} from './ConsultationForm.styled';

const ConsultationForm = () => {
	const onSubmitForm = (values, { resetForm }) => {
		const newContact = {
			name: values.name,
			phone: values.phone,
		};
		send('service_j9i2vnf', 'template_rxg2z2w', newContact, 'wzNtBlUnlkhh-CHVo')
			.then(_ => {
				Notify.success(
					`Дякуємо за зворотній звʼязок незабаром з вами звʼяжуться`
				);
			})
			.catch(err => {
				Notify.failure(`${err}`);
			});
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
			<ConsultForm
				action="mailto:pavlovovzhynskyy@gmail.com"
				method="POST"
				encType="enctype=”text/plain"
			>
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
