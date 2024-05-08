import { useState } from 'react'
import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard.jsx'
function App() {

    const users = [
        {
            userName: "felipeRC",
            name: "felipe",
            isFollowing: true
        },
        {
            userName: "AFRC",
            name: "andres",
            isFollowing: false
        }, {
            userName: "JorgC",
            name: "Jorge",
            isFollowing: true
        }

    ]

    return (
        <section className='App'>
            {
                users.map(user => {
                    const { name, userName, isFollowing } = user
                    return (
                        <TwiterFollowCard
                            key={userName}
                            name={name}
                            username={userName}
                            initialIsFollowing={isFollowing}>
                        </TwiterFollowCard>
                    )
                })
            }


        </section>
    )
}

export default App