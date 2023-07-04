import * as yup from 'yup';

export const beggarValidationSchema = yup.object().shape({
  story: yup.string(),
  user_id: yup.string().nullable(),
});
