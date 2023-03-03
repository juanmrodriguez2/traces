import * as yup from 'yup';

const countryStatDbRowSchema = yup.object({
  name: yup.string().required(),
  code: yup.string().required(),
  occurrences: yup.number().required().default(0),
});

export type CountryStat = yup.Asserts<typeof countryStatDbRowSchema>;
