import React, { useState } from 'react'
import FileInput from './FileInput';
import TextInput from './TextInput';


export default function ControllInput({ allInput, sendData }) {

    const [valide, setValide] = useState([])
    const [pass, setPass] = useState(false);

    function startVerify() {
        setPass(true)
        if (valide.length === 0) {
            sendData()

        } else {
            console.log("pas ok register", valide)
        }
    }

    return (
        <>
            {allInput.map((input, index) => {
                switch (input.nametype) {
                    case "input":
                        return <TextInput input={input} key={index} valide={valide} setValide={setValide} pass={pass}/>
                    case "file":
                        return <FileInput input={input} key={index} />
                    case "date":
                    //ajout d'input de date 

                    //ne rien mettre en dessous du custom
                    case "custom":
                        return input.component
                    default:
                        break;
                }
            })}
            <button onClick={startVerify} className="buttontoreg">Submit</button>
        </>
    )
}
