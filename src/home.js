export const home = () => {
    const content = document.querySelector("#content");
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const title = document.createElement("h1");
    title.textContent = "Yathar-Mon Cafe";
    title.classList.add("home-title");
    const p = document.createElement("p");
    p.classList.add("home-body");
    p.textContent = `Yathar-Mon Cafe is one of the best places in Mandalay 
                        to enjoy the sunrise view of Mandalay Palace. We 
                        serve tea and various kinds of coffee as well as 
                        Myanmar traditional cousines such as Mohinga, Shan Khauk Swe,
                        Tofu Nway, Kaut Nyin Paung and many more. We also have free wifi 
                        for everyone and serve free Yay Nway Gyan too.`;

    const openHoursContainer = document.createElement('div');
    openHoursContainer.classList.add('open-hours');

    const openHours = document.createElement("h2");
    openHours.textContent = "Open Hours";

    const openHoursList = document.createElement("ul");
    const openHourListItems = ["Monday: 7:00AM to 6:00PM", "Tuesday: 7:00AM to 6:00PM", "Wendesday: 7:00AM to 6:00PM",
                                "Thursday: 7:00AM to 6:00PM", "Friday: 7:00AM to 6:00PM",
                                "Saturday: 7:00AM to 8:00PM", "Sunday: 7:00AM to 8:00PM",];
    
    
    openHourListItems.forEach(function(day) {
        const li = document.createElement("li");
        li.textContent = day;

        openHoursList.appendChild(li);
    })
    openHoursContainer.append(openHours, openHoursList);

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = "Location";

    const locationText = document.createElement("p");
    locationText.textContent = "66th street,18th x 19th, Mandalay, Myanmar";

    content.append(title, p, openHoursContainer, locationTitle,locationText);
}
