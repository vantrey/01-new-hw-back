import { inputValidationMiddleware } from '../../../middlewares/input-validation.middleware';
import { titleStringValidation } from '../field-validators/title-validations';
import { authorStringValidation } from '../field-validators/author-validations';
import { canBeDownloadValidators } from '../field-validators/can-be-download-validations';
import { minAgeRestrictionValidators } from '../field-validators/min-age-restriction-validations';
import { publicationDateValidators } from '../field-validators/publication-date-validations';
import { resolutionValidations } from '../field-validators/resolution-validations';
import { checkParam } from '../param-validatiors/param-validation';

/**
 * Update video validators
 */
export const updateVideoValidation = [
	checkParam,
	titleStringValidation,
	authorStringValidation,
	resolutionValidations.optional(),
	...canBeDownloadValidators,
	...minAgeRestrictionValidators,
	...publicationDateValidators,
	inputValidationMiddleware,
];
