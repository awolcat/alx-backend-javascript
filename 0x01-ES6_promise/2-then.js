export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from th API');
      return { status: 200, body: 'success' };
    })
    .catch((error = new Error()) => {
      console.log('Got a response from the API');
      return error;
    });
}
