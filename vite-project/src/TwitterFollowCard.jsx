export function TwitterFollowCard ({children, formatUserName, username, isFollowing}) {

    const imgSrc = 'https://unavatar.io/${userName}';
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' alt="avatar de midulive" src={imgSrc}/>
            <div className='tw-followCard-info'>   <strong >{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(username)}</span>  
            
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



