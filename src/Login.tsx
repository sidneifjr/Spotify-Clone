import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

// The code inside our URL after we click on the button will be used in the next step of authentication, as a token to identify the user for all requests we need.
export const Login = () => {
  return (
    <a href={AUTH_URL} target="_blank">Login with Spotify</a>
  )
}

// Spotify web API Node
// A library which can be used in both Node and the browser, it allows us to call the Spotify API in a much easier way.
