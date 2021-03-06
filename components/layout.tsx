import Alert from './alert'
import Header from "./header"
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
        <div className={`min-h-screen -mb-21`}>
          <Alert preview={preview} />
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
    </>
  )
}

export default Layout
