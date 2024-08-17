import { useNavigate } from 'react-router-dom';

function Home (){
  let navigate = useNavigate();

  function handleChange(){
    navigate('/Login');
  }

  return(
    <div className='homepage'>
      <h2>Fitpulse</h2>
      <p>#1 nutrition tracking app</p>
      <h1>Reach your goals</h1>
      <h3>with Fitpulse</h3>
      <h4>Build healthy habits with the all-in-one food, exercise, and calorie tracker.</h4>
      <img className='img' src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Flogged-out-v2%2Fhero-phone-large.png&w=320&q=75" alt="Fitpulse Phone"></img>
      <button onClick={handleChange}>Start</button>  ~ 
    </div> 
  )
}
export default Home;