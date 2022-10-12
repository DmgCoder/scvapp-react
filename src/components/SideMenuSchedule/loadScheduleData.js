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
  return [trenutnaUra, naslednjaUra];
};

const GetClassType = (ura) => {
  if (!ura) {
    return null;
  }
  if (ura.dogodek) {
    return "dogodek";
  } else if (ura.nadomescanje === true) {
    return "nadomescanje";
  } else if (ura.zaposlitev === true) {
    return "zaposlitev";
  } else if (ura.odpadlo === true) {
    return "odpadlo";
  }
};

export { GetClassType };

export default LoadScheduleData;
