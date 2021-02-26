import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox () {
    const challengeActive = true

    return(
        <div className={styles.challengeBoxContainer}>

            { challengeActive ? (
                <div className={styles.challengeActive}>
                    <header>Get 400 XP</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>New Challenge</strong>
                        <p>Insert challenge here</p>

                        <footer>
                            <button type="button" 
                            className={styles.challengeFailedButton} 
                            >Give up</button>
                            <button type="button" className={styles.challengeCompletedButton} >Completed Challenge</button>
                        </footer>
                    </main>

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finish a cicle so you can start a new challenge.</strong>

                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Get to another level by completing challenges.
                </p>
            </div>
            )}
        </div>
    )
} 