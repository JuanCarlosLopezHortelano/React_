import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   const formatUserName = (userName) => '@${userName}'
   return(
      <section className='App'>
      <TwitterFollowCard formatUserName ={formatUserName} name="Juan Carlos" username="jotacee" isFollowing/>
      <TwitterFollowCard formatUserName ={formatUserName} name="Juan Carlos" username="jotacee" isFollowing/>

      
      </section> 
   

   )
       
        
   
}