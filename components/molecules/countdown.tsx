import moment from "moment-timezone";
import { useCallback, useEffect, useState } from "react";
import Number from "@/components/atoms/number";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const defaultTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const Countdown: React.FC<Props> = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(defaultTime);

  const calculateTimeLeft = useCallback(() => {
    const timeNow = moment.tz("Asia/Manila");
    const difference = endDate.diff(timeNow);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      const duration = moment.duration(difference);
      timeLeft = {
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      };
    }

    return timeLeft;
  }, [endDate]);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timeLeftTimer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timeLeftTimer);
  }, [calculateTimeLeft]);

  return (
    <>
      <div className="flex gap-x-2 md:gap-x-6 pb-[5%] pt-[3%]" id="rsvp">
        <Number digits={timeLeft.days} label="Araw"/>
        <Number digits={timeLeft.hours} label="Oras"/>
        <Number digits={timeLeft.minutes} label="Minuto"/>
        <Number digits={timeLeft.seconds}label="Segundo"/>
      </div>
      <hr className="w-24 h-1 md:h-2 bg-[#978241]" />
    </>
  );
};

interface Props {
  endDate: moment.Moment;
}
export default Countdown;
