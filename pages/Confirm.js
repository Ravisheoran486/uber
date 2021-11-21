import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
const Confirm = () => {
  const router = useRouter();
  // 🆒 Hyimen
  const { pickup, dropoff } = router.query;
  const [pick, setPick] = useState();
  const [drop, setDrop] = useState();
  const getPickupCoordinate = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicnNoZW9yYW4xMiIsImEiOiJja3c2M3o5ZDcyM2Z4Mm5yb2VzM2kwYjQyIn0.TQx8LsbP7x_TitEZSIfR4A",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // 🚀 L M
        console.log(data.features[0].center);
        setPick(data.features[0].center);
      });
  };

  const getdropCoordinate = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoicnNoZW9yYW4xMiIsImEiOiJja3c2M3o5ZDcyM2Z4Mm5yb2VzM2kwYjQyIn0.TQx8LsbP7x_TitEZSIfR4A",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        // 🚀 L M
        console.log(data.features[0].center);
        setDrop(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinate(pickup);
    getdropCoordinate(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map pick={pick} drop={drop} />
      <RideContainer>
                <RideSelector pick={pick} drop={drop} />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
    </Wrapper>
  );
};

export default Confirm;
const Wrapper = tw.div`
flex h-screen flex-col
`;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

// Good Job Devlin
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`