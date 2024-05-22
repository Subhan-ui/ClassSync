import React, { useEffect, useState } from "react";

const useGetFetch = ({ link }) => {
  // const [data, setData] = useState({});
 
const fetchedData = async()=>{
      const res = await fetch(`http://192.168.149.102:3000/${link}`, {
        headers: { "Content-Type": "application/json" },
      });
      const response = await res.json();
      if(response.ok){
        return response;

      }
      return 'not found'
      // setData(response);
  }

  return fetchedData;
};

export default useGetFetch;
