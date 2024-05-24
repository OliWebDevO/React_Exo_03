const CounterButtons = ({step,
        onIncr = () => {}, //NOOP -> Fct vide par defaut
        onDecr = () => {}
    }) => {

    const handleIncr = () => {
        onIncr(step);
    };
    
    const handleDecr = () => {
        onDecr(step);
    };

    return (
        <div>
            <button onClick={handleIncr}> + {step} </button>
            <button onClick={handleDecr}> - {step} </button>
        </div>
    );
};
export default CounterButtons;