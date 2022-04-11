export const  toggleElement= (id,displayProperty,type)=>{
    const element = document.getElementById(id)
    element.style.display = type=== 'enter' ? displayProperty : 'none' 
}

export const formatName = (completeName)=>{
    if(completeName){
        let [name,lastName] = completeName.split(/[/()\s]/)
        const completeLength = (lastName ? lastName.length : 0) + name.length
        if(completeLength>= 15){
            lastName = lastName[0]+'.'
        }
        return name + (lastName ? ' ' + lastName : '')

    }
    else return null

}
export const filterLastFirstAndPopular = (titles,dateFormat)=>{
  console.log('filterLastFirstAndPopular',titles)
    const first =null
    /*
    titles?.reduce((prev,current)=>{
      if(prev[dateFormat]){
        console.log('entre con fecha',prev[dateFormat], current[dateFormat], {current})
        let prevDate = new Date(prev[dateFormat].replace(/-/g, '\/'))
        let currentDate = new Date(current[dateFormat].replace(/-/g, '\/'))
        if( prevDate<currentDate){
          return prev
        }
        else return current
      }
      else if(current[dateFormat]){
        return prev
      }
      else return current
       
      })
    */
      const last = null
      /*
      titles?.reduce((prev,current)=>{
        if(prev[dateFormat]){
          let prevDate = new Date(prev[dateFormat].replace(/-/g, '\/'))
          let currentDate = new Date(current[dateFormat].replace(/-/g, '\/'))
          if( prevDate>currentDate){
            return prev
          }
          else return current
        }
        else return current
       
      })
      */
     let popular=null
    if(titles.length){
      popular = titles?.reduce((prev,current)=>{
        if( prev.popularity>current.popularity){
          return prev
        }
        else return current
      })

    }
      return {first,last,popular}
}
export  const getPersonStatistics = ({ cast, crew }) => {
  const allMovies = cast.filter((mov) => mov.media_type === "movie");
  const allSeries = cast.filter((mov) => mov.media_type === "tv");
  let director =[]
  let ExecutiveProducer=[]
  if(crew.length){
    director = crew.filter(
      (mov) => mov.job === "Director" && mov.media_type === "movie"
    );
    ExecutiveProducer = crew.filter(
      (mov) => mov.job === "Executive Producer" && mov.media_type === "movie"
    );

  }

  return { allMovies, allSeries,director,ExecutiveProducer };
};

export   const getRecurrentGenre = ({movies,allGenres})=>{
  const genresCounts = {};
  console.log('getRecurrentGenre',movies)
  movies.forEach((mov) => {
    if (mov.media_type === "movie") {
      mov.genre_ids.forEach((id) => {
        if (genresCounts[id]) {
          genresCounts[id]++;
        } else {
          genresCounts[id] = 1;
        }
      });
    }
  });
  const genreValues = Object.values(genresCounts);
  const genreKeys = Object.keys(genresCounts);
  const recurrentGenreValue = Math.max(...genreValues);
  const recurrentGenreIndex = genreValues.indexOf(recurrentGenreValue);

  const recurrentGenreId = genreKeys[recurrentGenreIndex];
  return allGenres.genres.filter(
    (genre) => genre.id === +recurrentGenreId
  )[0];

}

export  const job = {
  Acting: ["actriz", "actor"],
  Directing: ["Directora","Director"],
  Production:["Productora","Productor"]
};
export const filters = [
  {
    label: "populares",
    type: 'popular',
  },
  {
    label: "mejores",
    type: 'top_rated',
  },
  {
    label: "en cartelera",
    type: 'now_playing',
  },
  {
    label: "próximos estrenos",
    type: 'upcoming',
  },
];