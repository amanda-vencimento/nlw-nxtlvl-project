import { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>

                <strong>Congratulations!</strong>
                <p>You got to the next level.</p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}