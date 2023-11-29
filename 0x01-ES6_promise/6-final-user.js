import signUpUser from '4-user-promise';
import uploadPhoto from '5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  Promise.allSettled([signUp, photo]).then((result) => result);
}
