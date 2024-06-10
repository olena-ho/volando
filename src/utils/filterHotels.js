export const getFilterResult = (hotel, filters) => {
  const {
    activities = [],
    locCode = [],
    comfort = [],
    price = [],
    rating = []
  } = filters;

  //the user has to select at least one activity or location
  const matchesActivities =
    activities.length === 0 ||
    activities.some((activity) => hotel.activities.includes(activity));

  const matchesLocation =
    locCode.length === 0 || locCode.includes(hotel["loc-code"]);

  //other parameters are optional
  const matchesComfort =
    comfort.length === 0 || comfort.every((c) => hotel.comfort.includes(c));

  const matchesPrice =
    price.length === 0 ||
    price.includes("any-price") ||
    price.includes(hotel.price);

  const matchesRating =
    rating.length === 0 ||
    rating.includes("any") ||
    rating.some((r) => hotel.rating >= parseFloat(r));

  return {
    matchesActivities,
    matchesLocation,
    matchesComfort,
    matchesPrice,
    matchesRating,
  };
};

export const filterHotels = (hotels, filters) => {
  const filteredHotels = hotels.filter((hotel) => {
    const filterResult = getFilterResult(hotel, filters);
    return Object.values(filterResult).every((value) => value === true);
  });

  const alternativeHotels = hotels.filter((hotel) => {
    const filterResult = getFilterResult(hotel, filters);
    return filterResult.matchesActivities;
  });

  return {
    filteredHotels,
    alternativeHotels,
  };
};
