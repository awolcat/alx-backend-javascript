/* eslint-disable-next-line */
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const userData = createUser();
  const photoData = uploadPhoto();
  Promise.all([photoData, userData])
    .then(([photoRes, userRes]) => {
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
