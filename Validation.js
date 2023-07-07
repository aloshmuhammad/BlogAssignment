import { body,param, validationResult } from 'express-validator';

export const createBlogValidation = [
  body('blogName').notEmpty().withMessage('Blog name is required'),
  body('category').notEmpty().withMessage('Category is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('date').notEmpty().withMessage('Date is Required')
];
export const blogValidationWithId = () => [
    param('id')
      .notEmpty()
      .withMessage('ID is required'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];
  
  

 



export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
