import * as yup from 'yup';

const longestDistanceDbRowSchema = yup.object({
  name: yup.string().required(),
  code: yup.string().required(),
  distance: yup.number().required().default(0),
});

export type LongestDistance = yup.Asserts<typeof longestDistanceDbRowSchema>;
