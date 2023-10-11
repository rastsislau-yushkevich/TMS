import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState("NOT_STARTED");
    const [timer, setTimer] = useState(0);

    const handleStartStopClick = (newStatus: string) => {
        setStatus(newStatus);
    }

    useEffect(() => {
        if (status === "STARTED") {
            const newTimer = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
            setTimer(Number(newTimer));
        } else {
            clearInterval(timer);
        }
    }, [status])

    return(
        <div>
           <span>Seconds after start: {seconds}</span>
           <div>
                <Button variant="success" onClick={() => handleStartStopClick("STARTED")}>Start</Button>    
           </div>
           <div>
                <Button variant="danger" onClick={() => handleStartStopClick("STOPPED")}>Stop</Button>
           </div>
        </div>
    )
}



export default Timer