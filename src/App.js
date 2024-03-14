import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Card from "./Components/Card/Card";
import Section from "./Components/Section/Section";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "./API/api";
import { useEffect, useState } from "react";
//import { StyledEngineProvider } from "@material-ui/core";
export default function App() {
  const [data, setData] = useState({});
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prev) => ({ ...prev, [key]: data }));
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);
  const { topAlbums = [], newAlbums = [], songs = [] } = data;
  console.log(topAlbums + "Hi");
  return (
    <>
      <Navbar />
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />

      <Card />
      <Section />
    </>
  );
}
