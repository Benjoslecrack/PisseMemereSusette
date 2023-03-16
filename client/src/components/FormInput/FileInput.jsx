import React, { useState } from 'react';

export default function FileInput({ input }) {
    const [urlFile, setUrlFile] = useState()

    const onSelectedFile = (event, setValue) => {
        const selectedFile = event.target.files;
        setUrlFile(URL.createObjectURL(selectedFile[0]));
        setValue(selectedFile[0])
    };

    return (
        <div className="formInput">
            <label>{input.label}</label>
            <input
                key={input.name}
                onChange={(e) =>
                    onSelectedFile(e, input.setValue)
                }
                label={input.label}
                name={input.name}
                type={input.type}
                errorMessage={input.errorMessage}
                placeholder={input.placeholder}
                // required={input.required}
                encType="multipart/form-data"
                className={input.className}
            />

            {urlFile ? (
                <img src={urlFile} alt={input.name} className="imgInput" />
            ) : input.existingFile ? (
                <img
                    src={`${process.env.REACT_APP_BACK_URL}/${input.existingFile}`}
                    alt={input.name}
                    className="imgInput"
                />
            ) : null}


            <span>{input.errorMessage}</span>
        </div>
    );
};

