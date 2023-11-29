import { uploadPhoto, createUser } from './utils';


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
