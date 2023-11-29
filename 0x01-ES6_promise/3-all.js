/* eslint-disable-next-line */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const combined = { ...values[0], ...values[1] };
    console.log(combined.body, combined.firstName, combined.lastName);
  });
}
