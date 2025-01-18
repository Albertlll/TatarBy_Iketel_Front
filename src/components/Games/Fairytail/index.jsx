import { useParams } from 'react-router-dom';
import GamesLayout from '../GamesLayout';

function Fairytail() {

    const { id } = useParams(); // Получаем параметр `id` из URL

    return ( 
        <GamesLayout>
            
        </GamesLayout>
     );
}

export default Fairytail;