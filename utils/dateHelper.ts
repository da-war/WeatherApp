export const convertTo12hrFormat = (time: Date) => {
    let hours = time.getHours();
    const currentHour = new Date().getHours();

    if (currentHour === hours) return "Now";
    
    const amPm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours %12;
    hours= hours ? hours : 12;
    return `${hours} ${amPm}`;
}
    

export const getDayOfWeek = (date: Date):[string,boolean] => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()];
    const isToday = new Date().getDay() === date.getDay();
    return [day, isToday];
    
} 