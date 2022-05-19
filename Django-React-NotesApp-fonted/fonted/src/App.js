import logo from './logo.svg';
import Header from './components/Header';
import NoteListPage from './pages/NoteListPage';
import ReactDOM from "react-dom/client";
import './pages/NoteListPage.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotePage from './pages/NotePage';

function App() {
  return (

    // <div className='App'>
    //   <Header/>
    //   <NoteListPage/>

    // </div>

    <div className='container dark'>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NoteListPage />} />
            <Route path="/note/:id" element={<NotePage />} />

            {/* <Route path=":invoiceId" element={<Invoice />} />
        <Route path="sent" element={<SentInvoices />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
