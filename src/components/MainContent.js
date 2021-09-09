import React from 'react'
import AnimeCard from './AnimeCard';
import gif1 from '../Waiting.gif';

function MainContent(props) {
    return (
       <main>
           <div className="main-head">
               <form className="search-box" onSubmit={props.HandleSearch }>
                   <input 
                        type="search" 
                        placeholder="Search for an anime..." 
                        required
                        value = {props.search}
                        onChange = {e => props.SetSearch(e.target.value)}
                        />
               </form>
           </div>

           <div className="WaitingGif" id="WaitingGif"> 
                <img src={gif1} alt="Waiting" width="700" height="400"/>

                <h2>Waiting For a Search...</h2>
           </div>
           <div className="anime-list">
               {props.animeList.map(anime => (
               <AnimeCard
                    anime={anime}
                    key={anime.mal_id}
                />     
            ))}

           </div>
       </main>
    )
}


export default MainContent
