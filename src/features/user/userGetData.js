const getUserData = async () => {
  try {
    let data = null;
    const [userDataFetch, userStatusFetch, userSchoolFetch, isUserAdmin] =
      await Promise.all([
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/`, {
          mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
          credentials: "include", //Seja uporabnika je vključena
          method: "GET", //Uporabljena je metoda GET
        }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/get/status`, {
          mode: "cors",
          credentials: "include",
          method: "GET",
        }),
        fetch(`${process.env.REACT_APP_BACKEND_URL}/user/school`, {
          mode: "cors",
          credentials: "include",
          method: "GET",
        }),
        chechIfUserAdmin(),
      ]);

    if (userDataFetch.ok) {
      if (userStatusFetch.ok && userSchoolFetch.ok) {
        const [userDataJson, userStatusJson, userSchoolJson] =
          await Promise.all([
            userDataFetch.json(),
            userStatusFetch.json(),
            userSchoolFetch.json(),
          ]);
        data = userDataJson;
        data.status = userStatusJson;
        data.school = userSchoolJson;
        data.isAdmin = isUserAdmin;
      } else if (userStatusFetch.ok) {
        const [userDataJson, userStatusJson] = await Promise.all([
          userDataFetch.json(),
          userStatusFetch.json(),
        ]);
        data = userDataJson;
        data.isAdmin = isUserAdmin;
        data.status = userStatusJson;
        data.school = {
          id: "",
          urnikUrl: "",
          color: "",
          schoolUrl: "",
          name: "",
          razred: "",
        };
      } else if (userSchoolFetch.ok) {
        const [userDataJson, userSchoolJson] = await Promise.all([
          userDataFetch.json(),
          userSchoolFetch.json(),
        ]);
        data = userDataJson;
        data.isAdmin = isUserAdmin;
        data.status = {
          display: "Unknown",
          color: "#ffffff",
          id: "Unknown",
        };
        data.school = userSchoolJson;
      } else {
        const userDataJson = await userDataFetch.json();
        data = userDataJson;
        data.isAdmin = isUserAdmin;
        data.status = {
          display: "Unknown",
          color: "#ffffff",
          id: "Unknown",
        };
        data.school = {
          id: "",
          urnikUrl: "",
          color: "",
          schoolUrl: "",
          name: "",
          razred: "",
        };
      }
    }
    return data;
  } catch (e) {
    return null;
  }
};

async function chechIfUserAdmin() {
  try {
    let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/admin`, {
      mode: "cors", //Prijemne podatke lahk uporabi tudi iz tujih domen
      credentials: "include", //Seja uporabnika je vključena
      method: "GET", //Uporabljena je metoda GET
    }).catch((e) => console.log(e));
    if (res.status === 200) {
      const isAdminJson = await res.json();
      return isAdminJson.admin;
    }
    return false;
  } catch (e) {
    return false;
  }
}

export default getUserData;
