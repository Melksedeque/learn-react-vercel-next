import {useState} from 'react';

function Header({title}) {
    return <h1>{title? title : "Default title"}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log('I like it!');
        setLikes(likes + 1);
    }

    return (
        <>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Likes ({likes})</button>
        </>  
    )
}