import { body } from 'express-validator';
import { ResolutionEnum } from '../../../enums';

export const resolutionValidations = body('availableResolutions').custom(
	(value: ResolutionEnum[]) => {
		if (!Array.isArray(value)) {
			throw new Error('availableResolutions must be an array!');
		}

		const resolutionEnumArray = Object.values(ResolutionEnum);
		/*const isSomeOfValuesNotInEnum = value.some(
			(resolution) => !(resolution in ResolutionEnum),
		);*/
		//const regExp = new RegExp(/^P144$|^P240$|^P720$|^P1440$/)
		const regExp = new RegExp(
			`^${ResolutionEnum.P144}$|^${ResolutionEnum.P240}$|^${ResolutionEnum.P720}$|^${ResolutionEnum.P1440}$|^${ResolutionEnum.P2160}$`
		)
		const isEveryValuesInEnum = value.every((resolution) => resolutionEnumArray.includes(resolution))
		if (isEveryValuesInEnum) {
			return true;
		}
		throw new Error(`Possible resolutions: ${resolutionEnumArray}`);
	},
);
