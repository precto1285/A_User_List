// Class to GET data.
class userHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}