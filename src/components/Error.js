import { useRouteError } from "react-router-dom"
export default function Error(){
    const err=useRouteError();
    console.log(err);
    return(
        <div className="Error-page">
            <div className="Error-msg">
                <h1>Ooops... This page cannot be found</h1>
                <h2>{err.status} : {err.statusText}</h2>
            </div>
        </div>
    )
}