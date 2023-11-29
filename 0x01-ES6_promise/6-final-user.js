import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const promises = [];
  const output = [];
  promises.push(signUp);
  promises.push(photo);
  return Promise.allSettled(promises).then((results) => {
    results.map((result) => {
      output.push({
        status: result.status,
        value: result.status === 'rejected' ? result.reason.toString() : result.value 
      });
    });
    return output;
  });
}
