
import {useState , useEffect} from 'react'
import axios from 'axios';

function LoadImages(){

    const count = 1;
    const[state , setState] = useState([])

    useEffect(() => {
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=beach&per_page=24&format=json&nojsoncallback=1')

       .then((data)=>{
           setState(data.data)
       });
    }, [count])

    return state ;

}

export { LoadImages }