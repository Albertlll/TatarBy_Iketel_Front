import { useParams } from 'react-router-dom';
import GamesLayout from '../GamesLayout';
import Mission from './Info/Mission';

function Fairytail() {

    const { id } = useParams(); // Получаем параметр `id` из URL

    return ( 
        <GamesLayout>


            <Mission/>

        </GamesLayout>
     );
}

export default Fairytail;