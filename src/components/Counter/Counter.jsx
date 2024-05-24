import { useState } from "react"
import CounterButtons from "./CounterButtons"
import CounterPrinter from "./CounterPrinter";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncr = (val) => {
        console.log('Incr', val)
        setCount(count => count + val)
    }
    const handleDecr = (val) => {
        console.log('Decr', val)
        setCount(count => count - val)
    }
    return (
        <>
        <CounterPrinter result = {count}/>
        <CounterButtons step={1} onIncr={handleIncr} onDecr={handleDecr}/>
        <CounterButtons step={5} onIncr={handleIncr} onDecr={handleDecr}/>
        <CounterButtons step={10} onIncr={handleIncr} onDecr={handleDecr}/>
        </>
    )
}
export default Counter