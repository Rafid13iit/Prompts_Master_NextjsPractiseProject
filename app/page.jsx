import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover, Create & Share 
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
           AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Prompts Master is an open-source AI tool designed for the modern world, enabling users to discover, create, and share innovative prompts
      </p>

      <Feed />

    </section>
  )
}

export default Home