import ReactDOM from 'react-dom/client';
import './index.scss';
import 'normalize.css'
import AdminRouter from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminRouter />);
