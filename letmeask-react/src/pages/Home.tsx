import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import "../styles/auth.scss"
import Button from "../components/Button"
import { useHistory } from "react-router-dom"
import {auth, provider, signInWithPopup, GoogleAuthProvider} from "../services/firebase"

export const Home = () => {
  const history = useHistory()



  const handleCreateRoom = () => {


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
    console.log(result)
    history.push("/rooms/new")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


   
  }

  return (
  <div id="page-auth">
    <aside>
      <img
        src={illustrationImg}
        alt="Ilustração simbolizando perguntas e respostas"
      />
      <strong> Crie salas de Q&amp;A ao-vivo </strong>
      <p> Tire as dúvidas da sua audiência em tempo-real </p>
    </aside>
    <main>
        <div className="main-content">
            <img src={logoImg} alt="Letmeask logo" />
            <button onClick={handleCreateRoom} className="create-room-button">
              <img src={googleIconImg} alt="Logo do Google" />
              Crie sua sala com o Google
            </button>
            <div className="separator"> ou entre em uma sala </div>
            <form>
              <input 
              type="text" 
              placeholder="Digite o código da sala"
              />
              <Button type="submit">
                Entrar na sala
              </Button>
            </form>
        </div>
    </main>
  </div>
  )
}

