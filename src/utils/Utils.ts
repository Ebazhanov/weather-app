interface Props {
  latitude: any;
  longitude: any;
  endpoint: string | undefined;
  apiKey: string | undefined;
}

export const getUrl = (
  endpoint: string | undefined,
  latitude: any,
  longitude: any,
  apiKey: string | undefined
) => {
  return `${endpoint}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&cnt=9`;
};

export const getCurrentPosition = () => {
  if (!window.navigator || !window.navigator.geolocation) {
    alert("Error: geolocation API is not valid");
    throw new Error("Error: geolocation API is not valid");
  }
  return new Promise((resolve, reject) =>
    window.navigator.geolocation.getCurrentPosition(resolve, reject)
  ).catch(() => {
    alert("User denied Geolocation");
  });
};
