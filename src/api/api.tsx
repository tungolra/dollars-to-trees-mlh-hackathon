export function getEstimate() {
  const baseURL = "https://beta3.api.climatiq.io";
  const apiKey = "EZ0XHJM2KT4FY3M4C04S81SX19Y1";
  
  let data = fetch(`${baseURL}/estimate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      emission_factor: {
        activity_id: "consumer_goods-type_clothing",
      },
      parameters: {
        money: 120,
        money_unit: "usd",
      },
    }),
  });
  return data
}
