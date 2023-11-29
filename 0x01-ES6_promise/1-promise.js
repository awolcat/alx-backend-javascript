export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolveFunc, rejectFunc) => {
    if (success === true) {
      resolveFunc({ status: 200, body: 'Success' });
    } else if (success === false) {
      const error = new Error('The fake API is not working currently');
      rejectFunc(error);
    }
  });
  return promise;
}
