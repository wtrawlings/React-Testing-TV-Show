import axios from "axios";


const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          //console.log(res);
          return res
        })
      .catch(error => {
        console.log({error});
      })
  };

export default fetchShow;