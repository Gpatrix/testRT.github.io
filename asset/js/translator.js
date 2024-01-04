var translations;

function loadTranslations(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', '/asset/translations.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            translations = JSON.parse(xhr.responseText);
            callback();
        }
    };
    xhr.send(null);
}

function changeLanguage(lang) {
    Object.keys(translations).forEach(function (translationKey) {
        var elements = document.querySelectorAll('[translate="' + translationKey + '"]');
        elements.forEach(function (element) {
            if (translations[translationKey] && translations[translationKey][lang]) {
                element.innerHTML = translations[translationKey][lang];
            }
        });
    });
    document.documentElement.lang = lang;
}

loadTranslations(function () {
    var defaultLanguage = 'fr';
    changeLanguage(defaultLanguage);
});