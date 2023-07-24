import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Series } from "../Series/Series"
import { Top20Peliculas } from "../Top20Peliculas/Top20Peliculas"
// import { Detail } from "../Detail/Detail"



export const Body = () => {
  return (
    <>
        <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/top20peliculas" element={<Top20Peliculas />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
        </Routes>
    </>
  )
}
