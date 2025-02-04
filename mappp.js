//CODE FOR POPUP AND COORDINATES
// Define the adjacency lists and region coordinates
const nbRegions = 6;
const adjacencyLists = [
    [], //0
    [2, 9, 10], //1  
    [1, 3, 4], //2
    [2, 4, 5, 6], //3
    [2, 3, 6, 9], //4
    [3, 6, 8], //5
    [4, 5, 8, 9, 11], //6
    [8], //7
    [5, 6, 7, 11, 16, 17], //8
    [1, 4, 6, 10, 11], //9
    [1, 9], //10
    [6, 8, 9, 12, 13, 16], //11
    [11, 13], //12
    [11, 12, 14, 16], //13
    [13, 15, 16], //14
    [14, 16, 18], //15
    [8, 14, 15, 17, 18], //16
    [8, 16, 18], //17
    [15, 16, 17] //18
];

const regionsCentersCoords = [
    [940, 677], [504, 245], [584, 180], [659, 145], [641, 237], [795, 231], [723, 317], [891, 241], [756, 434], [582, 352], [425, 302], [604, 457], [514, 571], [592, 591], [681, 593], [840, 625], [732, 517], [818, 475], [862, 511]
];

// Get references to the map and popup elements
const map = document.getElementById('map');
const popup = document.getElementById('popup');

let currentRegionId = null;

// Gets information about the clicked region
function getRegionInfo(regionId) {
    const index = regionId - 1; // Adjust index since region IDs start from 1
    const adjacentRegions = adjacencyLists[index].join(', ');
    const coordinates = regionsCentersCoords[index].join(', ');
    return `Adjacent Regions: ${adjacentRegions} Coordinates: (${coordinates})`;
}

// Shows the popup
function showPopup(regionId) {
    currentRegionId = regionId;
    const regionInfo = getRegionInfo(regionId);
    if (regionInfo) {
        let img = '';
        //CONDITIONS FOR THE DIFFERENT REGION NAMES:
        if (regionId == 1) {
            popup.querySelector('h2').textContent = `Britannius`;
            img = 'region/Map1.png';
        }
        if (regionId == 2) {
            popup.querySelector('h2').textContent = `Lutetia`;
            img = 'region/Map2.png';
        }
        if (regionId == 3) {
            popup.querySelector('h2').textContent = `Silvia`;
            img = 'region/Map3.png';
        }
        if (regionId == 4) {
            popup.querySelector('h2').textContent = `Carbonaria`;
            img = 'region/Map4.png';
        }
        if (regionId == 5) {
            popup.querySelector('h2').textContent = `Ilia Francia`;
            img = 'region/Map5.png';
        }
        if (regionId == 6) {
            popup.querySelector('h2').textContent = `Arduenna silva`;
            img = 'region/Map6.png';
        }
        if (regionId == 7) {
            popup.querySelector('h2').textContent = `Maxima Sequanorum`;
            img = 'region/Map7.png';
        }
        if (regionId == 8) {
            popup.querySelector('h2').textContent = `Silva Nigra`;
            img = 'region/Map8.png';
        }
        if (regionId == 9) {
            popup.querySelector('h2').textContent = `Lugdunensis`;
            img = 'region/Map9.png';
        }
        if (regionId == 10) {
            popup.querySelector('h2').textContent = `Senonia `;
            img = 'region/Map10.png';
        }
        if (regionId == 11) {
            popup.querySelector('h2').textContent = `Aremorica`;
            img = 'region/Map11.png';
        }
        if (regionId == 12) {
            popup.querySelector('h2').textContent = `Pictavis`;
            img = 'region/Map12.png';
        }
        if (regionId == 13) {
            popup.querySelector('h2').textContent = `Aquitania`;
            img = 'region/Map13.png';
        }
        if (regionId == 14) {
            popup.querySelector('h2').textContent = `Narbonesis`;
            img = 'region/Map14.png';
        }
        if (regionId == 15) {
            popup.querySelector('h2').textContent = `Transalpina`;
            img = 'region/Map15.png';
        }
        if (regionId == 16) {
            popup.querySelector('h2').textContent = `Liguria`;
            img = 'region/Map16.png';
        }
        if (regionId == 17) {
            popup.querySelector('h2').textContent = `Gergovia`;
            img = 'region/Map17.png';
        }
        if (regionId == 18) {
            popup.querySelector('h2').textContent = `Helvetia`;
            img = 'region/Map18.png';
        }
        if (regionId == 19) {
            popup.querySelector('h2').textContent = `Insubria`;
            img = 'region/Map19.png';
        }
        popup.querySelector('p').textContent = regionInfo;
        popup.style.display = 'block';
        popup.style.backgroundImage = `url(${img})`;
        popup.style.backgroundSize = 'contain';
        popup.style.backgroundPosition = 'center';
        popup.style.backgroundRepeat = 'no-repeat';

        popup.classList.add('bounceIn');
    }
}

const tolerance = 20;
// Check if the click is within any region
function getclickedregion(mouseX, mouseY) {
    for (let i = 0; i < regionsCentersCoords.length; i++) {
        const [regionX, regionY] = regionsCentersCoords[i];

        const minX = regionX - tolerance;
        const maxX = regionX + tolerance;
        const minY = regionY - tolerance;
        const maxY = regionY + tolerance;

        if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
            return i + 1;
        }
    }
    return null;
}

// Handles the click events on map
function MapClick(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const clickedregion = getclickedregion(mouseX, mouseY);

    if (clickedregion !== null) {
        showPopup(clickedregion);
    }
}

map.addEventListener('click', MapClick);

// Hides the popup 
function hidePopup() {
    popup.style.display = 'none';
    buildpop.style.display = 'none';
    troopspop.style.display = 'none';
}

const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', hidePopup);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BUILD BUTTON POPUP

const buildpop = document.getElementById('buildpop');
const buildButton = popup.querySelector('#buildButton');
const closeBuildPopup = buildpop.querySelector('#closeBuildButton');

//Infos in the build option popup
function showBuildPopup() {
    buildpop.querySelector('h2').textContent = "BUILD";
    buildpop.style.display = 'block';
}

buildButton.addEventListener('click', showBuildPopup);

//Hides build option popup
function hideBuildPopup() {
    buildpop.style.display = 'none';
}

closeBuildPopup.addEventListener("click", hideBuildPopup);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//BULDING CONSTRUCTION

const imageExistsInRegion = new Array(regionsCentersCoords.length).fill(false); //constant to keep track of whether an image exists in a particular region

function iconDisplay(buildimg) {
    if (currentRegionId !== null && buildimg !== '') {

        let imageAlreadyExists = false; //constant if that img exists already

        for (let i = 0; i < imageExistsInRegion.length; i++) { //checks every img
            if (imageExistsInRegion[i] === buildimg) {
                imageAlreadyExists = true;
                break;
            }
        }

        if (!imageAlreadyExists && !imageExistsInRegion[currentRegionId - 1]) {

            const [regionX, regionY] = regionsCentersCoords[currentRegionId - 1];

            const image = new Image();
            image.src = buildimg;

            image.style.display = 'block';
            image.style.position = 'absolute';

            image.style.width = '80px';
            image.style.height = '80px';

            image.style.left = `${regionX}px`;
            image.style.top = `${regionY}px`;

            map.appendChild(image);

            imageExistsInRegion[currentRegionId - 1] = buildimg; // Updates the constant to indicate that an image now exists in this region

        } else if (imageAlreadyExists) {
            customAlert(" Its Already Built Mate !!! ");
        } else {
            customAlert("You Don't Have The Capacity");
        }
    }
}

//assigning images for each building (load file with icons in the folder where the codes are)
function getImage(buildId) {
    switch (buildId) {
        case 'forum':
            return 'icon/Forum.png';
        case 'bath':
            return '';
        case 'aqueduct':
            return 'icon/Aqueducttt.png';
        case 'amphitheater':
            return 'icon/Amphitheater.png';
        case 'temple':
            return 'icon/Temple.png';
        case 'barracks':
            return 'icon/Barak.png';
        case 'stable':
            return 'icon/Stable.png';
        default:
            return '';
    }
}

//Displays the building img on the regions
function handleBuildButton(event) {
    const buildId = event.target.id;
    const buildimg = getImage(buildId);
    iconDisplay(buildimg);
}

const buildButtons = buildpop.querySelectorAll('button'); //gets all button in the buildpop
//adds event to each buttons in buildpop
buildButtons.forEach(button => {
    button.addEventListener('click', handleBuildButton);
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TROOPS BUTTON POPUP

const troopspop = document.getElementById('troopspop');
const troopsButton = popup.querySelector('#troopsButton');
const closeTroopsButton = troopspop.querySelector('#closeTroopsButton');

//Infos in the build option popup
function showTroopsPopup() {
    troopspop.querySelector('h2').textContent = "TROOPS";
    troopspop.style.display = 'block';
}

troopsButton.addEventListener('click', showTroopsPopup);

//Hides build option popup
function hideTroopsPopup() {
    troopspop.style.display = 'none';
}

closeTroopsButton.addEventListener("click", hideTroopsPopup);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEFT TO RIGHT DROPDOWN MENU HANDLING

function toggleDropdown(event) {
    event.stopPropagation();
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
}

const dropdownButton = document.querySelector('.dropbtn');
dropdownButton.addEventListener('click', toggleDropdown);

document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown-content');
    if (!dropdown.contains(event.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    }
});