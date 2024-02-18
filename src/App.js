import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
    <Container>
      <main>
            <Outlet />
      </main>
    </Container>
    <Footer />
    </>
  );
}

export default App;
