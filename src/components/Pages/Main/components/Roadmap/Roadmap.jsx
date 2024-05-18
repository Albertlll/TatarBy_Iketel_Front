import s from './Roadmap.module.css'
import RoadmapBlock from './components/RoadmapBlock/RoadmapBlock';
import Navbar from '../../../../Shared/Navbar/Navbar';
import Menu from '../../../../Shared/Menu/Menu';
function Roadmap() {
    return (
    <div>
                <Navbar/>
        <Menu/>
    <div className={s.main}>
    <div className={s.roadmap_wrapper}>
        <RoadmapBlock index={0}></RoadmapBlock>
        <RoadmapBlock index={0}></RoadmapBlock>
        <RoadmapBlock index={0}></RoadmapBlock>

    </div>
    </div>
    </div>
);
}

export default Roadmap