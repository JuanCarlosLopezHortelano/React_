import { Children } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   const formatUserName = (userName) => `@${userName}`

   const users = [

      {
        userName: 'jotasee',
        name_: 'JuanCarlos',
        formatUserName:formatUserName,
        isFollowing: true,
        
      },
      { userName: 'ali', 
         name_: 'Alicia',
         formatUserName:formatUserName,
         isFollowing: true,
        
      },
    
   ]


  
   return(
      <section className='App'>
         {
       users.map(({userName,formatUserName,isFollowing, name_}) => (
         <TwitterFollowCard
            username={userName}
            name={name_}
            initialIsFollowing={isFollowing}
            formatUserName={formatUserName}
          >
          {name_}
         </TwitterFollowCard>
       ))
       
      }
      </section> 
   

   )
       
        
   
}