import{useState,useEffect} from 'react';
import Background from './Background/Background';
import Nav from './Nav/Nav';
import Hero from './Hero/Hero';
function App(){
  let heroData= [
    
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount]=useState(0)
  const[playStatus,setPlayStatus]=useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count=1})
  },3000);
},[])

  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Nav />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}
export default App
