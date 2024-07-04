import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   const formatUserName = (userName) => `@${userName}`
   return(
      <section className='App'>
      <TwitterFollowCard
         formatUserName ={formatUserName}  
         username="jotacee" isFollowing>
         <h1>Juan Carlos</h1>
      </TwitterFollowCard> 

      <TwitterFollowCard
         formatUserName ={formatUserName}  
         username="jotacee" isFollowing>
         <h1>Juan Carlos</h1>
      </TwitterFollowCard> 
      
      </section> 
   

   )
       
        
   
}