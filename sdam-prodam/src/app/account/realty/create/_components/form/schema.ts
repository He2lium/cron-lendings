import * as yup from 'yup';

export default yup.object({
  description: yup.string().required('Обязательно'),
  totalArea: yup.string().required('Обязательно'),
  cadastralNumber: yup.string().required('Обязательно'),
  buildingYear: yup.string().required('Обязательно'),
  commercialSubtype: yup.string().required('Обязательно'),
});
