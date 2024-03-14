import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import { fetchNewAlbums, fetchTopAlbums, fetchSongs } from "../../API/api";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card.js";
import Filters from "../Filters/Filters.js";
export default function Section({ title, data = [], type, filterSource }) {
  const [collapse, setCollapse] = useState(false);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        console.log("filter value is here" + data);

        setFilters((prevFilters) => [...prevFilters, ...data]);
      });
    }
  }, []);
  const showFilters = filters.length > 1;
  const CardsToRender = data.filter((card) => {
    return showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card;
  });

  return (
    <div>
      <div className={styles.Section_heading}>
        <h3>{title}</h3>
        <h4
          onClick={() => setCollapse(!collapse)}
          className={styles.toggleText}
        >
          {collapse ? "Show All" : "Collapse"}
        </h4>
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      <div className={styles.Section_content}>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className="cardWrapper">
            {collapse ? (
              <div className={styles.wrapper}>
                {CardsToRender.map((item) => (
                  <Card data={item} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                type={type}
                data={CardsToRender}
                renderComponent={(data) => {
                  return <Card data={data} type={type} />;
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
