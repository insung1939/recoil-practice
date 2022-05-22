import textState from "../atoms/text";
import { useRecoilState } from "recoil";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState)
    const onChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            InputText: {text}
        </div>
    )
}

export default TextInput;