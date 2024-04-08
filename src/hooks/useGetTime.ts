export const useGetTims = (mill: number) => {
    let totalSecond = parseInt(String(Math.floor(mill / 1000)));
    let totalMinuts = parseInt(String(Math.floor(totalSecond / 60)));
    let totalHours = parseInt(String(Math.floor(totalMinuts / 60)));
    let days = parseInt(String(Math.floor(totalHours / 24)));

    let seconds = parseInt(String(totalSecond % 60));
    let minuts = parseInt(String(totalMinuts % 60));
    let hours = parseInt(String(totalHours % 24));

    return { seconds, minuts, hours, days };
  };