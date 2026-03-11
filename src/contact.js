export const contact = () => {
    const content = document.querySelector("#content");
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact us";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    const contact1Container = document.createElement("div");
    const contact1Name = document.createElement("h2");
    contact1Name.textContent = "U Kyaw Zaw"
    const contact1About = document.createElement("ul");

    const contact1 = ["Position : Manager", "Phone.No : 09 382523353", "Email : ukyawzaw@gmail.com"];

    contact1.forEach(function(info) {
        const li = document.createElement("li");
        li.textContent = info;

        contact1About.appendChild(li);
    })

    contact1Container.append(contact1Name, contact1About);

    const contact2Container = document.createElement("div");
    const contact2Name = document.createElement("h2");
    contact2Name.textContent = "Daw Akari Moe";
    const contact2About = document.createElement("ul");

    const contact2 = ["Position : Assistant Manager", "Phone.No : 09 935335830", "Email : akarimoe@gmail.com"];

    contact2.forEach(function(info) {
        const li = document.createElement("li");
        li.textContent = info;

        contact2About.appendChild(li);
    })

    contact2Container.append(contact2Name, contact2About);

    const contact3Container = document.createElement("div");
    const contact3Name = document.createElement("h2");
    contact3Name.textContent = "U Kaung"
    const contact3About = document.createElement("ul");

    const contact3 = ["Position : Head Chef", "Phone.No : 09 779345353", "Email : chefkaung@gmail.com"];

    contact3.forEach(function(info) {
        const li = document.createElement("li");
        li.textContent = info;

        contact3About.appendChild(li);
    })

    contact3Container.append(contact3Name, contact3About); 
    
    contactContainer.append(contact1Container, contact2Container, contact3Container)

    content.append(contactHeader, contactContainer)
}