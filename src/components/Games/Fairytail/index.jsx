import { useParams } from 'react-router-dom';
import GamesLayout from '../GamesLayout';
import Mission from './Info/Mission';
import SelectAnswer from './Tasks/ReadStory';
import ReadStory from './Tasks/ReadStory';
import InputTextTask from './Tasks/Answer/InputTextTask';
import SelectVariant from './Tasks/Answer/SelectVariant';
import MissionComlete from './Info/MissionComplete';

function Fairytail() {

    const { id } = useParams(); // Получаем параметр `id` из URL

    return ( 
        <GamesLayout>


            <MissionComlete/>

        </GamesLayout>
     );
}

export default Fairytail;