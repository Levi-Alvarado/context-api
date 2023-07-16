import { createContext, useState, useEffect } from "react";
const MyAppContext = createContext();

function getInitialState() {
    return fetch("/fotos.json")
        .then(resp => resp.json())
}

export const MyAppProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState([]);

    useEffect(() => {
        getInitialState()
            .then((data) => {
                if (!data) return
                const initialState = data.photos.map((foto) => ({
                    src: foto.src,
                    id: foto.id,
                    alt: foto.alt,
                    liked: false
                }))
                console.log({ initialState })
                setGlobalState(initialState)
            })

    }, [])

    return (
        <MyAppContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </MyAppContext.Provider>
    );
};

export default MyAppContext;