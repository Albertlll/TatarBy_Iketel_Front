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
                return val.state == 1 ?
                    <RightElement/>
                    : 
                    val.state == 2 ?
                    <NotRightElement/>
                    :
                    <DefaultElement/>
            })}

        </ProgressElem>

    );
}

export default Progress;