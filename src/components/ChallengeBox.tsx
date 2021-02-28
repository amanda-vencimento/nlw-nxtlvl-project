import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/ChallengeBox.module.css'
import { CompletedChallenges } from './CompletedChallenges'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeCompleted() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>

            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Get {activeChallenge.amount} XP</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>New Challenge</strong>
                        <p>Get {activeChallenge.description} XP</p>

                        <footer>
                            <button type="button"
                                className={styles.challengeFailedButton}
                                onClick={handleChallengeFailed}>

                                Give up</button>

                            <button type="button" className={styles.challengeCompletedButton}
                                onClick={handleChallengeCompleted}>

                                Completed Challenge</button>
                        </footer>
                    </main>

                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finish a cicle so you can start a new  challenge.</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                    Get to another level by completing challenges.
                </p>
                    </div>
                )}
        </div>
    )
} 