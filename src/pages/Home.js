import 
{ 
  Banner
} 
from '../components/Webpages'


function Home() {
  return(
    <div>
      <Banner home url="/media/homeBanner_B.jpg"
                  page="search"
                  buttonText="Explore recipes"/>
    </div>
  ) 
}
export default Home
