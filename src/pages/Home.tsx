import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { AiOutlineGoogle } from 'react-icons/ai';

import '../styles/auth.scss'
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  function navigateToNewRoom(){
    navigate('/rooms/new')
  }

  return (
    <div id='page-auth'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Logo Letmeask' />
          <button onClick={navigateToNewRoom} className='create-room'>
            <AiOutlineGoogle color='#ffffff' />
            Crie sua sala com o Google
          </button>

          <div className='separator'>ou entre em uma sala</div>

          <form>
            <input 
            type='text' 
            placeholder='Digite o código da sala' 
          />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
