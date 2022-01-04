import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { AiOutlineGoogle } from 'react-icons/ai';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import toast, { Toaster } from 'react-hot-toast';

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }
    
    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    
    if (!roomRef.exists()) {
      return toast.error('Esta sala não existe');
    }
    
    if(roomRef.val().endedAt) {
      return toast.error('Esta sala foi encerrada');
    }

    navigate(`/rooms/${roomCode}`);
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
          <button onClick={handleCreateRoom} className='create-room'>
            <AiOutlineGoogle color='#ffffff' />
            Crie sua sala com o Google
          </button>

          <div className='separator'>ou entre em uma sala</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type='text'
              placeholder='Digite o código da sala'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type='submit'>Entrar na sala</Button>
          </form>
        </div>
        <Toaster position='top-center' reverseOrder={true} />
      </main>
    </div>
  );
}
