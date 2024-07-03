import './App.css'

export function App () {
    return (

        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="avatar de midulive" src="https://unavatar.io/baner.png" />
            <div className='tw-followCard-info'>   <strong >JuanCarlos</strong>
                    <span className='tw-followCard-infoUserName'>@jotasee</span>  
            
            </div>
        </header>

        <aside>
            <button className='tw-followCard-button'>
                Seguir
            </button>
        </aside>


    </article>   
    )
       
        
    
}