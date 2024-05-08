import { useState } from 'react'
import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard.jsx'
function App() {
    

    return (
        <section className='App'>
            <TwiterFollowCard 
            initialIsFollowing={isFollowing}
             name="Felipe" username="FelipeRodriguez06" 
            />
            <TwiterFollowCard 
            initialIsFollowing
            name="Andres" username="AndresRodriguez06"
            />

            <TwiterFollowCard
            initialIsFollowing
            name="Felipe" 
            />


        </section>
    )
}

export default App