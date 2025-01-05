
const fetchList = async () => {
  return fetch('http://localhost:8080/list-items')
    .then((response) => response.json())
    .then((data: string[]) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      //todo: implement better error handling
      console.error('Error:', error)
      throw error;
    })

}

export default fetchList;
