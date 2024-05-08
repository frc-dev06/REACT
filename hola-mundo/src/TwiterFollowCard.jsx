import { useState } from "react"

export function TwiterFollowCard({ username = "nnn", name, initialIsFollowing }) {

    //uso del hook useState para manipular el estado co la funcion setIsFollowing
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //texto a asignar al boton dependiendo el estado
    const text = isFollowing ? "Siguiendo" : "Seguir"

    //agregar clase al boton de acuerdo al estado
    const buttonClassName = isFollowing
        ? "tw-followCard-button is--following"
        : "tw-followCard-button"

    //cambiar el estado cuando se haga click
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }



    return (
        <article className='tw-followCard'>
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" alt="image user" src="https://unavatar.io/kikobeats"></img>
                <div className="tw-followCard-info">
                    <strong className="tw-followcard-name">{name}</strong>
                    <span className="tw-followCard-span">@{username}</span>
                </div>
            </header>

            <aside >
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )

}

