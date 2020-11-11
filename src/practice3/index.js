export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const { origin, author, content } = data;
      return [origin, author, content];
    });
};