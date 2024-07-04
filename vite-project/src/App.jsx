import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   const formatUserName = (userName) => `@${userName}`
   const jotasee = { username: 'jotasee', formatUserName:formatUserName}
   const ali = { userName: 'ali', formatUserName:formatUserName}

   return(
      <section className='App'>
      <TwitterFollowCard {...jotasee}>
         <h1>Juan Carlos</h1>
      </TwitterFollowCard> 

      <TwitterFollowCard
         formatUserName ={formatUserName}  
         username="jotacee" isFollowing = {false}>
         <h1>Juan Carlos</h1>
      </TwitterFollowCard> 
      
      </section> 
   

   )
       
        
   
}