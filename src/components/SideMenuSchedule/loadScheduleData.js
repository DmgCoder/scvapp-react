const LoadScheduleData = async () => {
  let json = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/schedule`, {
    mode: "cors",
    credentials: "include",
    method: "GET",
  });
  let data = null;
  if (json.ok) {
    data = await json.json();
  }
  const trenutnaUra = data.trenutnoNaUrniku;
  const naslednjaUra = data.trenutnoNaUrniku.naslednjaUra;
  return { trenutnaUra, naslednjaUra };
};

export default LoadScheduleData;
