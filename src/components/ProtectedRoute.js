import { Navigate } from "react-router-dom"
import Main from "./Main"
import Header from "./Header"


export default function ProtectedRoute({ loggedIn, dataUser, ...props }) {

  return (
    loggedIn ?
      <>
        <Header dataUser={dataUser} />
        <Main
          name='main'
          {...props}

          
        />
      </>
      : <Navigate to={'/sign-in'} replace />
  )
}
