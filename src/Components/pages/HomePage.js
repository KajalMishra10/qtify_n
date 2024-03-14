import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../Hero/Hero";
import Section from "../Section/Section.js";
import { fetchFilters } from "../../API/api";
export default function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <div>
      <Hero />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section
        title="Songs"
        data={songs}
        type="song"
        filterSource={fetchFilters}
      />
      {/*song sectiom*/}
    </div>
  );
}
