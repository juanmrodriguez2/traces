import * as yup from 'yup';

const currencySchema = yup.object({
  iso: yup.string().required(),
  symbol: yup.string().required(),
  conversionRate: yup.number().required().default(0),
});

const traceSchema = yup.object({
  ip: yup.string().required(),
  name: yup.string().required(),
  code: yup.string().required(),
  lat: yup.number().required().default(0),
  lon: yup.number().required().default(0),
  distance: yup.number().required().default(0),
  currencies: yup.array(currencySchema),
});

export type Trace = yup.Asserts<typeof traceSchema>;
