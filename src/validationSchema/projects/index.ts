import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  studio_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
