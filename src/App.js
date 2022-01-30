import React from 'react';
import './App.css';

//Imports for Navbar/routing
import { Link, NavLink, Switch, Route } from 'react-router-dom';

//Imports for Images used on pages
import image1 from './MyFace.jpg';
import image2 from './Orientation_Pic.jpeg'
import image3 from './AsiaPic.jpg'
import image4 from './TownBarPic.jpg'
import image5 from './Vegas2021.jpg'
import image6 from './Hiking2020.jpg'
import image7 from './ChurchCamp.jpg'
import image8 from './Hangout.jpg'
import pdf from './files/Resume.pdf'

//Imports for Database API
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent'

//Import for react slide-show
import { Fade } from 'react-slideshow-image';


const App = () => (
	<div className='app'>
	  <Navigation />
	  <Main />
	 </div>
  );
  
// NAVIGATION
  const Navigation = () => (
	<div className="navbar">
	<div className="max-width">
		<div className="logo"><li><NavLink exact activeClassName="current" to='/git-portfolio'>Jordan Sam</NavLink></li></div>
			<ul className="menu">
			<nav>
		<li><NavLink exact activeClassName="current" to='/git-portfolio'>Home</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/Projects'>Projects</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/Memories'>Memories</NavLink></li>
		<li><NavLink exact activeClassName="current" to='/Anime'>Anime</NavLink></li>
	</nav>
			</ul>
			<div className="menu-btn" id="menu-btn">
				<i className="fas fa-bars"></i>
			</div>
		</div>
	</div>
	
  );
  
// HOME
  const Home = () => (
	<section className="home" id="home">
    {/* <div  className="container"></div> */}
    <div className="max-width">
        <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Jordan Sam</div>
            <div className="text-3">and I'm an <span>Aspiring Engineer</span></div>
            <li><NavLink exact activeClassName="current" to='/Contact'>Contact Me</NavLink></li>
        </div>
    </div>
</section>
  );
  
// ABOUT
  const About = () => (
	<section className="about" id="about">
    <div className="max-width">
        <h2 className ="title">About Me</h2>
        <div className="about-content">
            <div className="column left">
                <img src={image1} alt="My Face"/>
			</div>
            <div className="column right">
                <div className="text">I enjoy <span>coding things</span>.</div>
                <p> I am a highly driven student who is interested in software engineering 
                    and I am currently getting my Bachelors Degree in computer science at 
                    the University of California, Riverside. I am a person who succeeds at 
                    communicating with colleagues in order to actively reach goals. I have 
                    experience in working with people within a large age range: from working 
                    with kids in middle school for church camp, friends for school projects, 
                    and coaching tennis to both younger and older adults.</p>
                    <li><Link to={pdf} target="_blank" download>Download Resume</Link></li>
            </div>
        </div>
    </div>
				
</section>
  );

  // PROJECTS
  const Projects = () => (
	<section className ="about" id="projects">
        <h2 className ="title">Works/Personal Projects</h2>

	<div className="row">
	  	<div className="text">          
	  		<div className="project-info">
            	<h1>Website Development</h1>
            	<h2>Alpha Solutions Investmnet Advisors</h2>
            	<p>I designed the website asiadvisors.com </p>

				<li><Link to={{ pathname: "https://www.asiadvisors.com" }} target="_blank">Visit Site</Link></li>
          	</div> 
		</div>
	  <div className="image"><img src={image3} alt="img" /></div>
	</div>

	<div className="row">
	  	<div className="image">
			  <img src={image4} alt="img"/>
		</div>
	  		<div className="text">
				<div className="project-info">
            	<h1>Amazon Web Services</h1>
            	<h2>Town Bar and Lounge</h2>
           	 	<p> I also designed the Town Bar and Lounge website with one of my friends from UCR. 
					It is an located in Downtown Oakland inside of an Art Deco Bar and Lounge. The 
					building itself was inspired by the iconic I. Magnin and Co. building and will 
					soon be open to the public for food and drinks! </p>

				<li><Link to={{ pathname: "https://townbarandlounge.com" }} target="_blank">Visit Site</Link></li>
          		</div>
			</div>
	</div>
  </section>
  );
const Memories = () => {
	return (
	  <div>
		<div className="slide-container">
		  <Fade>

			<div className="each-fade">
			  <div>
			  <img src={image2} alt="UCR Orientation"/>
			  </div>
			  <p><h1>UCR Orientation!</h1>
			  	This was the first time I visited the campus and I met a lot of great people there.</p>
			</div>

			<div className="each-fade">
			  <p><h1>Vegas 2021</h1>
				I spent a ton of time with my family and got to eat out at a ton of places which was 
				a big change of pace after quarantining for a year.</p>
			  <div>
			  <img src={image5} alt="Vegas Trip"/>
			  </div>
			</div>

			<div className="each-fade">
			  <div>
			  <img src={image6} alt="Hiking"/>
			  </div>
			  <p><h1>Hiking!</h1>
				I get to enjoy living in the bay area.</p>
			</div>

			<div className="each-fade">
			  <div>
			  <img src={image7} alt="Church Camp"/>
			  </div>
			  <p><h1>Church Camp!</h1>
				I learned a lot about my faith and enjoyed spending time with all the kids.</p>
			</div>

			<div className="each-fade">
			  <div>
			  <img src={image8} alt="Hangout"/>
			  </div>
			  <p><h1>Hanging out with Friends :)</h1>
			Everyone called me a pineapple the whole night…</p>
			</div>
			
		  </Fade>
		</div>
		</div>
	);
  };
  
// );

// CONTACT
  const Contact = () => (
<section className="contact" id="contact">
	<div className="content">
	<h2 className ="title">Contact Me</h2>
	</div>
	<div className="container">
		<div className="contactInfo">
			<div className="box">
				<div className="icon"><i className="fas fa-map-marker"></i></div>
				<div className="text">
					<h3>Address</h3>
					<p>900 University Ave, Riverside, CA 92521 </p>
				</div>
			</div>
			<div className="box">
				<div className="icon"><i className="fas fa-phone"></i></div>
				<div className="text">
					<h3>Phone</h3>
					<p>650-766-8658</p>
				</div>
			</div>
			<div className="box">
				<div className="icon"><i className="fas fa-envelope"></i></div>
				<div className="text">
					<h3>Email</h3>
					<p>jsam007@ucr.edu</p>
				</div>
			</div>
		</div>
		<div className="contactForm">
			<form>
				<h2>Send Message</h2>
				<div className="inputBox">
					<input type="text" name="" required="required"></input>
						<span>Full Name</span>
				</div>
				<div className="inputBox">
					<input type="text" name="" required="required"></input>
						<span>Email</span>
				</div>
				<div className="inputBox">
					<textarea type="text" name="" required="required"></textarea>
						<span>Enter Message</span>
				</div>
				<div className="inputBox">
					<input type="submit" name="" value="Send"></input>
				</div>
			</form>
		</div>
	</div>
				<div classname="social">
					<ul>
					<Link to={{ pathname: "https://www.youtube.com/channel/UCndb5uFB1fNPRLRLvU1cy5Q" }} target="_blank"><i className="fab fa-youtube"></i></Link>
					<Link to={{ pathname: "https://www.instagram.com/jsam_88" }} target="_blank"><i className="fab fa-instagram-square"></i></Link>
					<Link to={{ pathname: "https://github.com/Jsam88" }} target="_blank"><i className="fab fa-github-square"></i></Link>
					<Link to={{ pathname: "https://www.facebook.com/jordan.sam.5076" }} target="_blank"><i className="fab fa-facebook-square"></i></Link>
					<Link to={{ pathname: "https://www.linkedin.com/in/jordan-b-sam" }} target="_blank"><i className="fab fa-linkedin"></i></Link>
					</ul>
				</div>		
</section>
  );
  
// ANIME
  function Anime() {
	  const[animeList, SetAnimeList] = useState([]);
	  const[topAnime, SetTopAnime] = useState([]);
	  const[search, SetSearch] = useState("");
  
	  const GetTopAnime = async () => {
		  const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
		  .then(res => res.json());
  
		  SetTopAnime(temp.top.slice(0, 10));
	  }
	  const HandleSearch = e => {
		  e.preventDefault();
		  
		  FetchAnime(search);
	  }
  
	  const FetchAnime = async (query) => {
		  const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			  .then(res => res.json());
		  // console.log(temp.results);
		  SetAnimeList(temp.results);
	  }
  
	  useEffect(() => {
		  GetTopAnime();
	  }, []);
  
	  // console.log(topAnime);
  
	return (
	  <div className="Anime">
			<Header/>
		  <div className="content-wrap">
			  <Sidebar topAnime={topAnime}/>
			  <MainContent 
				  HandleSearch = {HandleSearch}
				  search = {search}
				  SetSearch={SetSearch}
				  animeList = {animeList} 
			  />
		  </div>
	  </div>
	);
  }

  // ROUTING PATHS
  const Main = () => (
	<Switch>
	  <Route path='/git-portfolio' component={Home}></Route>
	  <Route path='/about' component={About}></Route>
	  <Route path='/projects' component={Projects}></Route>
	  <Route path='/memories' component={Memories}></Route>
	  <Route path='/contact' component={Contact}></Route>
	  <Route path='/anime' component={Anime}></Route>
	</Switch>
  );
  
  export default App;