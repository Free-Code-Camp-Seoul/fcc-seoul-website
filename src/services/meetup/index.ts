import { MEETUP_RSS_LINK } from "@/const";

export const getMeetupInfo = async () => {
  const meetupResponse = await fetch(MEETUP_RSS_LINK, { cache: "no-store" });
  const meetupText = await meetupResponse.text();
  // create an array with all the time elements with the class "text-[#00829B] text-sm font-medium uppercase"
  const eventList = meetupText.match(
    /<time class="text-\[#00829B\] text-sm font-medium uppercase">(.*?)<\/time>/g
  );

  // remove the html tags and timezone from the array
  const trimmedEventList = eventList?.map((event) => {
    return event.replace(/(<([^>]+)>)/gi, "").replace(/(KST)/gi, "");
  });

  return trimmedEventList;
};
