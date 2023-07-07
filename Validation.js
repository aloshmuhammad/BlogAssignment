import { body,param, validationResult } from 'express-validator';

export const createBlogValidation = [
  body('blogName').notEmpty().withMessage('Blog name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('date').notEmpty().withMessage('Date is Required')
];
export const blogValidationWithid=(paramName)=>[
    param(paramName)
    .notEmpty()
    .withMessage(`${paramName} is required`)
    .bail()
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage(`Invalid ${paramName}`)
];



 



export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
