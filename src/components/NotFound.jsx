
import { useRouteError } from "react-router-dom";


function NotFound(){
    const err = useRouteError();
    return(
        <>
        <h1>Oops!!</h1>
        <h3>{err.status}{err.statusText}</h3>
        <h3>{err.data}</h3>
        </>

    );
}
export default NotFound;