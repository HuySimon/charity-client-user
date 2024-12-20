export async function getDonationByCampaignId(
  campaignId,
  name = "",
  pageNo = 0,
) {
  const params = {
    campaignId,
    name,
    pageNo,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donation/getCampaignDonation${queryString}`,
  );
  const data = await res.json();
  return data;
}

export async function getDonationHistory({
  campaignName = "",
  pageNo = 0,
  fromDate,
  toDate,
}) {
  const params = {
    campaignName,
    pageNo,
    fromDate,
    toDate,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donation/history${queryString}`,
    {
      credentials: "include",
    },
  );
  const data = await res.json();
  if (data.status === 400) {
    return null;
  }
  return data;
}

export async function searchDonation({
  phoneNumber = "",
  donorName = "",
  campaignName = "",
  pageNo = 0,
  fromDate,
  toDate,
}) {
  const params = {
    phoneNumber,
    donorName,
    campaignName,
    pageNo,
    fromDate,
    toDate,
  };
  const queryString = "?" + new URLSearchParams(params).toString();
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/donation/search${queryString}`,
  );
  const data = await res.json();
  if (data.status === 400) {
    return null;
  }
  return data;
}
