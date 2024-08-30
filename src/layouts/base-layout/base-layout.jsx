import React from 'react';
import styles from "./base-layout.module.scss"

const BaseLayout = ({ children }) => {
    return (
        <div >
            <div className={styles.container}>
                <h2>React Assestment</h2>
            </div>
            <main>{children}</main>
        </div>
    )
}

export default BaseLayout