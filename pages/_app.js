import DefaultLayout from '../Components/Layouts/DefaultLayout'
import DocsLayout from '../Components/Layouts/DocsLayout'
import MainLayout from '../Components/Layouts/MainLayout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || DefaultLayout;
  return <>
      <MainLayout>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </MainLayout>
  </>
}

export default MyApp
