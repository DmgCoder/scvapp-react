const getUserData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return {
    displayName: "123",
    givenName: "Janez",
    surname: "Novak",
    mail: "janez.novak@scv.si",
    id: "123456789",
    mobilePhone: "123456789",
  };
};

export default getUserData;
