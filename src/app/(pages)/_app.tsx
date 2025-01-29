import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Sidebar from '../components/sidebar';
import { UserProvider } from '../context/UserContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <UserProvider>
            <Sidebar />
            <Component {...pageProps} />
        </UserProvider>
    );
};

export default MyApp;
