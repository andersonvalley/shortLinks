import { ToastContainer } from "react-toastify"
import { Hero } from "./components/Hero/Hero"

function App() {
  return (
    <>
      <Hero />
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </>
  )
}

export default App
