
const fetchList = async () => {
  return fetch('http://localhost:8080/list-items')
    .then((response) => response.json())
    .then((data: string[]) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error:', error)
      return ['Error string'];
    })

}

export default fetchList;
