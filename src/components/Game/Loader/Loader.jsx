import styled from "styled-components"
import waves from "./waves.gif"

const LoaderElem = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50vh;
    transform: translateY(-50%);
    flex-direction: column;
    gap: 25px;
    font-size: 25px;
    color: var(--fg_color);
    font-family: 'Blazma';
`

const Loader = () => {
    return (
        <LoaderElem>
            <img src={waves} alt="Loading..." />
            История создается...
        </LoaderElem>
    );
}
 
export default Loader;