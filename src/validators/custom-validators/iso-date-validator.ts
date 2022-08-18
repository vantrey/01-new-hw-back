import { CustomValidator } from 'express-validator';

export const customIsoDateValidator: CustomValidator = (value: any) => {
	if (typeof value !== 'string') {
		throw new Error('Date must be in a Date format!')
	}
	const parsedDate = new Date(value).valueOf();
	if (parsedDate < 0 || isNaN(parsedDate)) {
		throw new Error('Date must be in a Date format!');
	}
	return true;
};
