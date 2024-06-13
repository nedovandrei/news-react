import './App.css'

import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import PostsLayout from './pages/posts'
import PostLayout from './pages/post'
import GlobalStyles from './styles/global'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={
            <ApolloProvider client={client}>
              <PostsLayout />
            </ApolloProvider>
          } />
         
          <Route path="post/:id" element={
            <ApolloProvider client={client}>
             <PostLayout />
            </ApolloProvider>
          } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
