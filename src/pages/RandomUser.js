import { QueryClient, QueryClientProvider } from 'react-query'
import Card from '../components/Card';
import Container from '../components/Container';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        },
    },
}) ;

const RandomUser = () => {
    return ( 
        <Container>
            <QueryClientProvider client={queryClient}>
                <Card/>
            </QueryClientProvider>
        </Container>
    );
}

export default RandomUser;