import Badge from "./components/Badges/Badge";
import Banners from "./components/Banners/Banner";
import Cards from "./components/Cards/Card";
import { SlCloudUpload } from "react-icons/sl";


function App() {

  return (
    <div className="App">
      <h2>Badges</h2>
      <div className="badges">
        <Badge className='red' onClick={()=> console.log('Clicked!')}>Red</Badge>
        <Badge className='green' onClick={()=> console.log('Clicked!')}>Green</Badge>
        <Badge className='blue pill' onClick={()=> console.log('Clicked!')}>Blue</Badge>
      </div>
      <hr />

      <h2>Banners</h2>
      <div className="banners">
        <Banners 
          status={'success'}
          title={'Congratulations!'} 
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'}
          />
        <Banners 
          status={'warning'}
          title={'Attention'} 
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id delectus possimus labore voluptate aspernatur laboriosam voluptates ex. In, harum.'}
          />
        <Banners 
          status={'error'}
          title={'There is a problem with your App'} 
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, suscipit.'}
          />
        <Banners 
          status={'neutral'}
          title={'Update available'} 
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id delectus possimus labore voluptate aspernatur laboriosam voluptates ex. In, harum.'}
          />
        <Banners 
          status={'neutral'}
          title={'Update available'} 
          />
      </div>
      <hr />

      <h2>Cards</h2>
      <div className="cards">
        <Cards 
          icon={<SlCloudUpload className="card--icon" />}
          title={'Easy Deployment'} 
          text={'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
          />
        <Cards 
          icon={<SlCloudUpload className="card--icon" />}
          title={'Easy Deployment'} 
          text={'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
          />
      </div>
      <hr />

    </div>
  )
}

export default App
