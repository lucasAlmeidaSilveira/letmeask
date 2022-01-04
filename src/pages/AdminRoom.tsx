import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';

import '../styles/room.scss';

type RoomsParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomsParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  return (
    <div id='page-room'>
      <header>
        <div className='content'>
          <Link to='/'>
            <img src={logoImg} alt='Logo Letmeask' />
          </Link>
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>
      <main className='content'>
        <div className='room-title'>
          <h1>Sala {title}</h1>
          {questions.length > 0 &&
            (questions.length > 1 ? (
              <span>{questions.length} perguntas</span>
            ) : (
              <span>{questions.length} pergunta</span>
            ))}
        </div>

        <div className='question-list'>
          {questions.map(question => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
