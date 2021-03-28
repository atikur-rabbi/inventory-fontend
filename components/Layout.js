import Head from 'next/head';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div id="body-pd">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>

      <link rel="stylesheet" href="assets/css/styles.css"></link>
      <header class="header" id="header">
        <div class="header__toggle">
          <i class='bx bx-menu' id="header-toggle"></i>
        </div>    
      </header>
    </Head>
    <Nav />
    <main>{children}</main>    
    <script src="assets/js/main.js"></script>
  </div>
  );
};

export default Layout;