import { React, useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message({ type, msg }) {

  const [visible, setVisibile] = useState(false);

  useEffect(() => {

    if(!msg)
    {
      setVisibile(false);
      return;
    }

    setVisibile(true)
    const timer = setTimeout(() => {
      setVisibile(false);
    }, 3000);

    return () => clearTimeout(timer)

  }, [msg]);

  return (
    <>
      {visible && 
      (
        <div className={`${styles.message} ${styles[type]}`}>
          <p>{msg}</p> 
        </div>
      )}
    </>
  )
}

export default Message
