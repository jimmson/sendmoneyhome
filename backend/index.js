exports.GetBalance = async (event) => {
  let res;

  if (event.user == 1)
    res = {
      currency: "ZAR",
      balance: 123,
    };
  else
    res = {
      currency: "NGN",
      balance: 123123123,
    };

  const response = {
    statusCode: 200,
    body: JSON.stringify(res),
  };
  return response;
};
