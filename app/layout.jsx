import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css'

export const metadata = {
  title: "Prompts Master",
  description: "Discover & Share AI Prompts",
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

const RootLayout = ( {children} ) => {
  return (
    <html lang="en">
      <body>
        <Provider>

          <div div className="main">
            <div className="gradient" /> 
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
          
        </Provider>
      </body>      
    </html>
  )
}

export default RootLayout;