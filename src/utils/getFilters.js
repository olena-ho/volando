export const getFilters = (searchParams) => ({
  activities: searchParams.get('activities')
    ? searchParams.get('activities').split(',')
    : [],
  locCode: searchParams.get('locCode')
    ? searchParams.get('locCode').split(',')
    : [],
  comfort: searchParams.get('comfort')
    ? searchParams.get('comfort').split(',')
    : [],
  price: searchParams.get('price')
    ? searchParams.get('price').split(',')
    : [],
  rating: searchParams.get('rating')
    ? searchParams.get('rating').split(',')
    : [],
});
