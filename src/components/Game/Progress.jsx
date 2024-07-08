import styled from "styled-components";

const ProgressElem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const RightElement = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: var(--fail_color);

`

const NotRightElement = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: var(--fg_color);
`

const NowElement = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: var(--now_task_color);
`

const DefaultElement = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 20px;
    background-color: var(--default_lesson);

`

function Progress(props) {
    return (
        <ProgressElem>
            {props.tasks.map((val, index) => {
                return val == 1 ?
                    <RightElement key={index}/>
                    : 
                    val == 2 ?
                    <NotRightElement key={index}/>
                    :

                    props.step == index ?
                    <NowElement key={index}/>
                    :
                    <DefaultElement key={index}/>
            })}

        </ProgressElem>

    );
}

export default Progress;