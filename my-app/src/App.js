import React from 'react';
import Header from './featured/header/header';
import Sidebar from './components/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import List from './atoms/list';
import Create from './atoms/create';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/components" element={<div>Components Page</div>} />
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;


