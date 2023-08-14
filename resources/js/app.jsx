import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/app.scss';

import ReactDOM  from 'react-dom/client';
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Sections';
import  { Home , Login, Register } from './page';



ReactDOM.createRoot(document.getElementById('app'))
    .render(
        <Layout>
            <Routes>
                <Route path='/' exact element={ <Home/> } />
                <Route path='/register_Front' exact element={ <Register/> } />
                <Route path='/login_Front' exact element={ <Login/> } />
            </Routes>
        </Layout>
    );
