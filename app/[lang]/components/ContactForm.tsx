'use client';
import { useState } from 'react';
import AnFormButton from './AnFormButton';
import { type getDictionary } from '../../../get-dictionary';
const ContactForm = async ({ dic }: { dic: Awaited<ReturnType<typeof getDictionary>> }) => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		message: '',
	});

	const [formErrors, setFormErrors] = useState({
		fullName: '',
		email: '',
		message: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validateForm = () => {
		let isValid = true;
		const errors = { fullName: '', email: '', message: '' };
		setFormErrors(errors);

		if (!formData.fullName.trim()) {
			errors.fullName = dic?.required;
			isValid = false;
		} else if (formData.fullName.trim().length < 4) {
			errors.fullName = dic?.short;
			isValid = false;
		}

		if (!formData.email.trim()) {
			errors.email = dic?.required;
			isValid = false;
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email.trim())) {
				errors.email = dic?.emailValidation;
				isValid = false;
			}
		}

		if (!formData.message.trim()) {
			errors.message = dic?.required;
			isValid = false;
		} else if (formData.message.trim().length < 4) {
			errors.message = dic?.short;
			isValid = false;
		}

		setFormErrors(errors);
		return isValid;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (validateForm()) {
		}
	};
	return (
		<form>
			<div className='mb-4'>
				<input
					type='text'
					id='fullName'
					name='fullName'
					placeholder={dic?.fullName}
					value={formData.fullName}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none ${
						formErrors.fullName ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.fullName && <p className='text-primary-200 mt-1 ps-2'>{formErrors.fullName}</p>}
			</div>
			<div className='mb-4'>
				<input
					type='text'
					id='email'
					name='email'
					placeholder={dic?.email}
					value={formData.email}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none ${
						formErrors.email ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.email && <p className='text-primary-200 mt-1 ps-2'>{formErrors.email}</p>}
			</div>
			<div className='mb-4'>
				<textarea
					id='message'
					name='message'
					placeholder={dic?.message}
					rows={5}
					value={formData.message}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 resize-none focus:outline-none ${
						formErrors.message ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.message && <p className='text-primary-200 mt-1 ps-2'>{formErrors.message}</p>}
			</div>
			<div className='flex justify-center items-center'>
				<AnFormButton
					dic={dic}
					className='px-16 rounded-full w-full mx-auto lg:w-auto'
					onClick={handleFormSubmit}>
					{dic?.send}
				</AnFormButton>
			</div>
		</form>
	);
};

export default ContactForm;
