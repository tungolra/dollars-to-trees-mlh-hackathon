export function getEstimate(activityId: string, money: number) {
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
        activity_id: activityId,
      },
      parameters: {
        money: money,
        money_unit: "usd",
      },
    }),
  });
  return data
}
