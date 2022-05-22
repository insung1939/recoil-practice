import { useRecoilValue } from "recoil";
import charCountState from "../selectors/charCountState";

const CharacterCount = () => {
    const count = useRecoilValue(charCountState)
    return (
        <div>Character Count: { count}</div>
    )
}

export default CharacterCount;