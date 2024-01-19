import { useState } from "react";
import Badge from "./components/Badges/Badge";
import Banners from "./components/Banners/Banner";
import Cards from "./components/Cards/Card";
import { SlCloudUpload, SlCloudDownload } from "react-icons/sl";
import Testimonial from "./components/Testimonials/Testimonial";
import catImg from './assets/cat-protrait.jpg'
import smCatImg from './assets/cat-protrait-sm.jpg'
import Toast from "./components/Toasts/Toast";

function App() {
  const popUps = ['Success', 'Warning', 'Error', 'Info']
  const [toastOpen, setToastOpen] = useState(false)
  const [toastType, setToastType] = useState('')

  const randomIdx = () => {
    return Math.floor(Math.random() * popUps.length)
  }

  function toastClick() {
    setToastType(popUps[randomIdx()])
    setToastOpen(!toastOpen)
    setTimeout(() => {
      setToastOpen(prev => !prev)
    }, 3000);
  }

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
          status={'info'}
          title={'Update available'} 
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id delectus possimus labore voluptate aspernatur laboriosam voluptates ex. In, harum.'}
          />
        <Banners 
          status={'info'}
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
          icon={<SlCloudDownload className="card--icon" />}
          title={'Easy Deployment'} 
          text={'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
          />
      </div>
      <hr />

      <h2>Testimonials</h2>
      <div className="testm">
        <Testimonial 
          img={{catImg, smCatImg}} 
          alt={"portrait of a cat"} 
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.'}
          fullName={'Meow Andersons'}
          position={'Workcation, CTO'}
        />
      </div>
      <hr />

      <h2>Toast Popups</h2>
      <div className="toast">
        <div className="toast--container">
          <button disabled={toastOpen} onClick={toastClick}>Display Popup</button>
          <Toast 
            open={toastOpen} 
            title={toastType}
          />
        </div>

      </div>
      <hr />

    </div>
  )
}

export default App
