function calculateDistance(markLat, markLng, placeLat, placeLng) {
  const R = 6371;

  const markLatRad = (Math.PI * markLat) / 180;
  const markLngRad = (Math.PI * markLng) / 180;
  const placeLatRad = (Math.PI * placeLat) / 180;
  const placeLngRad = (Math.PI * placeLng) / 180;

  const dLat = placeLatRad - markLatRad;
  const dLng = placeLngRad - markLngRad;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(markLatRad) * Math.cos(placeLatRad) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

export default calculateDistance;
