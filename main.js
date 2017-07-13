
let htmlString = ''

htmlString += `<div class='profile'>`

customers.results.map(function(item) {
    htmlString += `<div class="profileWrap"><img class="profilePic" src="${item.picture.large}">
    <p class="profileName">${item.name.first} ${item.name.last}</p>
    <email class="profileEmail"><p>${item.email}</p></email>
    <address class="profileAddress"><p>${item.location.street}<br>${item.location.city}, ${item.location.state} ${item.location.postcode}<br><span class="profilePhone">${item.phone}</span></p></address>
    <p class="ssn">${item.id.value}</p></div>
    `
})


htmlString += `</div>`

document.querySelector('#directory').innerHTML = htmlString
