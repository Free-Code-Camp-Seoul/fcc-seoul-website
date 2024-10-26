import { MEETUP_RSS_LINK } from "@/const";

export const getMeetupInfo = async () => {
  const meetupResponse = await fetch(MEETUP_RSS_LINK, { cache: "no-store" });
  const meetupText = await meetupResponse.text();
  // create an array with all the meetup times from the RSS feed"
  const eventList = meetupText.match(/<p>Sunday.+M<\/p>/g);

  // remove the html tags and timezone from the array
  const trimmedEventList = eventList?.map((event) => {
    return event.replace(/(<([^>]+)>)/gi, "").replace(/(KST)/gi, "");
  });

  const correctFormatEventList = trimmedEventList?.map((badFormatEventTime) =>
    // replace "at" with "2024" to make the date valid JS date format
    badFormatEventTime.replace("at", "2024")
  );

  return correctFormatEventList;
};
