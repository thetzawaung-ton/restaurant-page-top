import mohinga from "./mohinga.jpg";
import shankhaukswe from "./shankhaukswe.jpg";
import kautnyinpaung from "./kautnyinpaung.jpg";

export const menu = () => {
    const content = document.querySelector("#content");
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const foodMenu = document.createElement("div");
    foodMenu.classList.add("food-menu");
    const foodMenuTitle = document.createElement("h2");
    foodMenuTitle.textContent = "Foods";

    const foodMenu1 = document.createElement("div");
    const foodMenu1Title = document.createElement("h3");
    foodMenu1Title.textContent = "Mohinga";
    const foodMenu1Description = document.createElement("p");
    foodMenu1Description.textContent = `Mohinga(Fish Noodles Soup) is national food of 
                                        Myanmar.It is most consumed Breakfast here.`
    const foodMenu1Photo = document.createElement("img");
    foodMenu1Photo.src = mohinga;
    const foodMenu1Price = document.createElement("p");
    foodMenu1Price.textContent = "3000Ks";

    foodMenu1.append(foodMenu1Title, foodMenu1Description, foodMenu1Photo, foodMenu1Price);

    const foodMenu2 = document.createElement("div");
    const foodMenu2Title = document.createElement("h3");
    foodMenu2Title.textContent = "Shan Khauk Swe";
    const foodMenu2Description = document.createElement("p");
    foodMenu2Description.textContent = `Shan Khauk Swe(Shan Noodles) is another famous food of 
                                        Myanmar. It has many cooking styles based on the region.
                                        Like its name, Shan Khauk Swe from Shan State is the most
                                        beloved.`
    const foodMenu2Photo = document.createElement("img");
    foodMenu2Photo.src = shankhaukswe;
    const foodMenu2Price = document.createElement("p");
    foodMenu2Price.textContent = "3000Ks";

    foodMenu2.append(foodMenu2Title, foodMenu2Description, foodMenu2Photo, foodMenu2Price);

    const foodMenu3 = document.createElement("div");
    const foodMenu3Title = document.createElement("h3");
    foodMenu3Title.textContent = "Kaut Nyin Paung";
    const foodMenu3Description = document.createElement("p");
    foodMenu3Description.textContent = `It is one of the most oldest food that is beloved still today.
                                        Before then, Gaung-Ywat-Zay-The(The head-carrying vendor) mostly sell
                                        Kaut Nyin Paung with Pae Pyote. It is best to pair them with a kettle of 
                                        Yay Nway Gyan.`
    const foodMenu3Photo = document.createElement("img");
    foodMenu3Photo.src = kautnyinpaung;
    const foodMenu3Price = document.createElement("p");
    foodMenu3Price.textContent = "2000Ks";

    foodMenu3.append(foodMenu3Title, foodMenu3Description, foodMenu3Photo, foodMenu3Price);

    foodMenu.append( foodMenu1, foodMenu2, foodMenu3);

    content.append(foodMenuTitle, foodMenu);
}