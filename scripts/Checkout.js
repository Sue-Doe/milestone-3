
function buttonAddonRemovePress(id) {
    document.getElementById("aoption_" + id).remove();
    cart.removeAddon(id);
}
function buttonInsuranceRemovePress(id) {
    document.getElementById("ioption_" + id).remove();
    cart.removeInsurance(id);
}

function setCheckOutSummary() {
    if (cart.getVehicleID() >= 0) {
        vehicle = carList.fromId(cart.getVehicleID());
        document.getElementById("vname").textContent = vehicle.getMake() + "  " + vehicle.getModel();
     //   document.getElementById("vcolor").textContent = "Color: " + vehicle.getColor();
        document.getElementById("vseats").textContent = vehicle.getNumSeats();
        document.getElementById("vcargo").textContent = vehicle.getLuggageSpace();
        document.getElementById("vaddress").textContent = cart.getAddress();
        document.getElementById("vsdate").textContent = cart.getStartDate();
        document.getElementById("vedate").textContent = cart.getEndDate();

        let Itemplate = document.getElementById("ioption");
        for (const id of cart.insurance) {

            let pk = insurancePackages[id];
            document.getElementById("ioption_name").textContent = pk.name;
            document.getElementById("ioption_desc").textContent = pk.desc;
            document.getElementById("ioption_cost").textContent = pk.cost;
            document.getElementById("ioption_button").setAttribute("onclick", "buttonInsuranceRemovePress(" + id + ")");
            let info = document.createElement("div")
            info.setAttribute("id", "ioption_" + id);
            info.style.overflow = "hidden"
            info.style.marginTop = "1%"
            info.innerHTML = Itemplate.innerHTML;
            document.getElementById("ioptions").appendChild(info);
        }
        Itemplate.innerHTML = ''

        let Atemplate = document.getElementById("aoption");
        for (const id of cart.addons) {

            let pk = addonPackages[id];
            document.getElementById("aoption_name").textContent = pk.name;
            document.getElementById("aoption_desc").textContent = pk.desc;
            document.getElementById("aoption_cost").textContent = pk.cost;
            document.getElementById("aoption_button").setAttribute("onclick", "buttonAddonRemovePress(" + id + ")");
            let info = document.createElement("div")
            info.setAttribute("id", "aoption_" + id);
            info.style.overflow = "hidden"
            info.style.marginTop = "1%"
            info.innerHTML = Atemplate.innerHTML;
            document.getElementById("aoptions").appendChild(info);
        }
        Atemplate.innerHTML = ''

    }
}