
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {CounterActions} from '../store/Slices/couter-slice'


export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [incrementAmount, setIncrementAmount] = useState('2')

 
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(CounterActions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(CounterActions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(CounterActions.incrementByAmount(Number(incrementAmount)))}
        >
          Add Amount
        </button>
      </div>
    </div>
    
  )
}
