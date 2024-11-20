import { useRouteError } from "react-router-dom"

const Error = () => {
  const {status,error} = useRouteError();
  return (
    <div className="error">
        <h2>Oops ! Something went wrong</h2>
        <h3>{status +" - "+ error}</h3>
    </div>
  )
}

export default Error