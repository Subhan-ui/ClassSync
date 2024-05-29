const useFetch = ({link,body}) => {
  const fetchedData = async()=>{
    const response = await fetch(`http://192.168.149.102:3000/${link}`,{
      method: 'POST', 
      headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
    });
    return response;
  }
  
  return fetchedData;
}

export default useFetch;