import { MEETUP_LINK } from "@/const";

export const getMeetupInfo = async () => {
  const meetupResponse = await fetch(MEETUP_LINK, { cache: "no-store" });
  const meetupText = await meetupResponse.text();

  // Event time format is '"dateTime":"2025-02-09T12:00:00+09:00"'
  const eventList = meetupText.match(/"dateTime":".+?"/g);

  // Format the times to '2025-02-09T12:00:00+09:00'
  const correctFormatEventList = eventList?.map((event) => {
    return event.replace(/"dateTime":"|"/gi, "");
  });

  return correctFormatEventList;
};
