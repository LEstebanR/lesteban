import "./styles/app.css";
import "./styles/animations.css";
import Header from "@components/header";
import Footer from "@components/footer";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-3xl px-6 mx-auto pt-20">
        {/* <main>
          <AboutMe />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
