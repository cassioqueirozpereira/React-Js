import React from 'react'

import "./StylesExamples.css"

import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    // Inline
    const inlineStyles = {
        color: "blue",
        fontSize: "20px",
    }

  return (
    <div>
        <h2 style={inlineStyles}>Estilos inline</h2>

        {/* Arquivo de estilos */}
        <p className='text'>Meu CSS</p>

        {/* CSS Modules */}
        <p className={styles.textPurple}>Meu CSS Modules</p>
    </div>
  )
}

export default StylesExamples