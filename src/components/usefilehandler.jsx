import { useState } from 'react';

export const useFileHandler = (type = "single") => {
    const [files, setFiles] = useState([]);
    const [preview, setPreview] = useState(null);

    const changeHandler = (e) => {
        const selectedFiles = e.target.files;
        const fileArray = Array.from(selectedFiles);
        
        if (type === "single") {
            const file = fileArray[0];
            setFiles([file]);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else if (type === "multiple") {
            setFiles(fileArray);

            const previews = fileArray.map((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                return new Promise((resolve) => {
                    reader.onloadend = () => {
                        resolve(reader.result);
                    };
                });
            });

            Promise.all(previews).then(setPreview);
        }
    };

    return {
        files,
        preview,
        changeHandler,
    };
};
