import { useEffect, useState } from "react";

function DogImageFetcher() {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((apiData) => {
            setData(apiData.message);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    
    return ( 
        <div>
            {data && <img width={500} src={data} alt="Random dog" />}
        </div>
    );
}

export default DogImageFetcher;
