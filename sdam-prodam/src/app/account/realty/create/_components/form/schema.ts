import * as yup from 'yup';

export default yup.object({
  description: yup.string().required('Обязательно'),
  total_area: yup.string().required('Обязательно'),
  cadastral_number: yup.string().required('Обязательно'),
  building_year: yup.string().required('Обязательно'),
  commercial_subtype: yup.string().required('Обязательно'),
  address: yup
    .object()
    .shape({
      city: yup.string().required('Обязательно'),
    })
    .required('Обязательно'),
});
