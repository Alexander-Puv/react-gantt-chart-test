import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/UI/Loader';
import { AppContext } from './context/context';
import './styles/App.css';
import './styles/iconfonts.css';

function App() {
    const [data, setData] = useState();
    const [areClose, setAreClose] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://82.202.204.94/tmp/test.php')
            .then(response => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    useEffect(() => {
        data && setIsLoading(false)
    }, [data])

    return (
        <AppContext.Provider value={{
            data, areClose, setAreClose
        }}>
                <div className="App">
                    {isLoading ?
                        <Loader />
                    :
                        <>
                            <Header />
                            <Main />
                        </>
                    }
                </div>
        </AppContext.Provider>
    );
}

export default App;
