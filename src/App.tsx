import { useEffect, useState } from "react";
import type { Artworks } from "./interfaces/Artworks.ts";
import VanGogh from "./components/VanGogh.tsx";

export default function App() {
  const [data, setData] = useState<Artworks[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
          console.log("fetching search data");

          //first we would have to fetch the data and filter it from
          //the search functionality of the API
          const rawData = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=Vincent%20van%20Gogh&"
          );
          const { objectIDs } = await rawData.json();
          //This line makes it so that it only displays 10 pieces of artwork
          //or else it would overload the site since there are over 400 of Van gogh artworks
          const selected = objectIDs.slice(0, 12);

          //now we are going to fetch again but this time we want to
          //get the artwork detail for each objectID

          //this call makes sure all fetch requests (promises) are finished before continuing
          const artworksData = await Promise.all(
              //for each objectID make sure to fetch the artwork detail
            selected.map(async (id: number) => {
              const res = await fetch(
                  `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
              );
              const obj = await res.json();
              console.log("fetched art object:", obj);

              //then we return the specific object fields and details that we want
              return {
                id: obj.objectID,
                title: obj.title,
                image: obj.primaryImageSmall,
                artist: obj.artistDisplayName,
                date: obj.objectDate,
                medium: obj.medium,
                dimensions: obj.dimensions,
                url: obj.objectURL,
              } as Artworks;
            })
        );

        setData(artworksData);
      } catch (e) {
        console.error("There was an error fetching artworks:" + e);
      }
    }

    fetchData();
  }, []);

  return (
      <>
          <VanGogh data={data} />
      </>
  );
}