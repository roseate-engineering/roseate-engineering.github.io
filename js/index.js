const lazyLoad = function () {
    const lazyImages = document.getElementsByClassName("lazy-img");
    for (lazyImage of lazyImages) {
        lazyImage.src = lazyImage.dataset.src
    }
    const slideshow = document.getElementById('slideshow');
}

const sheetsApiKey = 'AIzaSyCF86I8sGsInl2gmAypZxg96nswVIXkeHQ'
const loadCustomers = async () => {
    await gapi.client.init({
        'apiKey': sheetsApiKey,
    });
    const resp = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1Ugs9D6cSm5QdcUQhji0p_F5Ug86dSAmzx2eIaE4Rzic',
    });
    console.log(resp);

}

document.addEventListener("DOMContentLoaded", lazyLoad);
document.addEventListener("DOMContentLoaded", loadCustomers);

