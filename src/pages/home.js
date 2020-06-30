// Module imports
import React, {
  useContext,
  useEffect,
} from 'react'
import { NextSeo as NextSEO } from 'next-seo'
import { useRouter } from 'next/router'
import Link from 'next/link'





// Local imports
import { AuthContext } from 'context/AuthContext'
import { TweetsContextProvider } from 'context/TweetsContext'
import { TweetFeed } from 'components/TweetFeed'
import { TweetForm } from 'components/TweetForm'





const Home = () => {
  const router = useRouter()
  const {
    isLoading: authIsLoading,
    user,
  } = useContext(AuthContext)

  useEffect(() => {
    if (!authIsLoading && !user) {
      router.replace('/register')
    }
  }, [
    authIsLoading,
    user,
  ])

  return (
    <>
      <NextSEO
        description="Blorp"
        title="Home" />

      <header className="page-header">
        <h2>Home</h2>
      </header>

      {(!authIsLoading && Boolean(user)) && (
        <TweetsContextProvider>
          <TweetForm />

          <TweetFeed />
        </TweetsContextProvider>
      )}
    </>
  )
}





export default Home