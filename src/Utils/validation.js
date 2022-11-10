import * as yup from 'yup';

export const consultationFormSchema = yup.object({
	name: yup.string().min(3).max(15).required('Ведіть від 3-10 символів'),
	phone: yup.string().min(10).max(10).required('Введіть 10 цифр'),
});
