import * as yup from "yup";
import { IFormMessage } from '~/types/formM.interface';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = "minimum length = ${min} characters";

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = "maximum length = ${min} characters";

export const schema: yup.ObjectSchema<IFormMessage> = yup.object().shape({
  fullName: yup.string().email().required("*").max(30, tooLongMessage),
  email: yup
    .string()
    .email()
    .required("*")
    .min(5, tooShortMessage)
    .max(16, tooLongMessage),
  phone: yup
    .number()
    .required("*")
    .min(4, tooShortMessage)
    .max(15, tooLongMessage),
  message: yup
    .string()
    .required("*")
    .min(10, tooShortMessage)
    .max(250, tooLongMessage),
});
