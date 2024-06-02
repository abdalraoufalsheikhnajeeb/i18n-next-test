'use client';
import { useState } from 'react';
import AnFormButton from './AnFormButton';
import Image from 'next/image';
import { type getDictionary } from '../../../get-dictionary';
const AnApplyForm = ({ dic }: { dic: Awaited<ReturnType<typeof getDictionary>> }) => {
	const [formData, setFormData] = useState({
		fullName: '',
		phone: '',
		email: '',
		country: '',
		cv: null,
	});

	const [formErrors, setFormErrors] = useState({
		fullName: '',
		email: '',
		phone: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleCVUpload = (e) => {
		setFormData({ ...formData, cv: e.target.files[0] });
	};

	const validateForm = () => {
		let isValid = true;
		const errors = { fullName: '', email: '', phone: '' };
		setFormErrors(errors);

		if (!formData.fullName.trim()) {
			errors.fullName = dic?.required;
			isValid = false;
		} else if (formData.fullName.trim().length < 4) {
			errors.fullName = dic?.short;
			isValid = false;
		}

		if (!formData.phone.trim()) {
			errors.phone = dic?.required;
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

		setFormErrors(errors);
		return isValid;
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
		}
	};
	return (
		<form className='flex flex-col w-full lg:grid lg:grid-cols-2 gap-7'>
			<div>
				<input
					type='text'
					name='fullName'
					placeholder={dic?.fullName}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none ${
						formErrors.fullName ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.fullName && <p className='text-primary-200 mt-1 ps-2'>{formErrors.fullName}</p>}
			</div>
			<div>
				<input
					type='text'
					name='phone'
					placeholder={dic?.phone}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none ${
						formErrors.phone ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.phone && <p className='text-primary-200 mt-1 ps-2'>{formErrors.phone}</p>}
			</div>
			<div>
				<input
					type='text'
					name='email'
					placeholder={dic?.email}
					onChange={handleInputChange}
					className={`w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none ${
						formErrors.email ? 'border-red-500' : 'border-neutral-400'
					}`}
				/>
				{formErrors.email && <p className='text-primary-200 mt-1 ps-2'>{formErrors.email}</p>}
			</div>
			<div className='relative flex items-center h-[42px]'>
				<select
					title='country'
					name='country'
					onChange={handleInputChange}
					className='w-full p-2 border rounded-xl placeholder-primary-900 text-primary-900 focus:outline-none appearance-none'>
					<option value='' disabled selected>
						{dic?.country}
					</option>
					<option value='Syria'>{dic?.syria}</option>
					<option value='uae'>{dic?.uae}</option>
				</select>
				<div
					className={`absolute inset-y-0 flex items-center px-3.5 pointer-events-none ${
						dic?.currLang !== 'ar' ? 'right-0' : 'left-0'
					}`}>
					<Image src='/images/icon-arrow-down.png' alt='icon-arrow-down' width={10} height={10} />
				</div>
			</div>
			<div className='flex items-center justify-start gap-4'>
				<label htmlFor='cv-upload' className='cursor-pointer'>
					<Image src='/images/icon_upload.png' alt='icon_upload' width={68} height={68} />
				</label>
				<input
					placeholder='.'
					id='cv-upload'
					type='file'
					name='cv'
					onChange={handleCVUpload}
					className='hidden'
				/>
				<span>{formData.cv ? formData.cv.name : dic?.uploadCV}</span>
			</div>
			<AnFormButton
				className='px-16 rounded-full w-full mx-auto lg:w-auto lg:col-span-2'
				onClick={handleFormSubmit}
				dic={dic}>
				{dic?.apply}
			</AnFormButton>
		</form>
	);
};

export default AnApplyForm;
