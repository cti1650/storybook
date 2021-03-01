import React from 'react';

export interface TodayStampProps {}

export const TodayStamp: React.FC<TodayStampProps> = ({
  ...props
}) => {
  const today = () => {
    let utc = new Date()
    // 現在時刻とUTCの時差を求める。ハワイなら600分 * 60秒 * 1000ミリ秒
    const offset = utc.getTimezoneOffset() * 60 * 1000 // ローカルタイムとして協定時を出すために時差分調整

    utc = new Date(utc.getTime() + offset)
    // 日本時間に調整(UTC+9)
    const timeJP = new Date(utc.getTime() + 9 * 60 * 60 * 1000)
    const jpYear = timeJP.getFullYear()
    const jpMonth = timeJP.getMonth() + 1
    const jpDate = timeJP.getDate()
    return `${jpYear  }年${  jpMonth  }月${  jpDate  }日`
  }

  return (
      <p {...props}>{today()}</p>
    );
}

