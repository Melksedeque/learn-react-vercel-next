"use client"

import styles from './page.module.css';
import LikeButton from './like-button';

function Header({title}) {
    return <h1>{title? title : "Default title"}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <main className={styles.main}>
            <div className={styles.conteudo}>
                <Header title="Develop. Preview. Ship." />
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
                <LikeButton />
            </div>
        </main>  
    )
}