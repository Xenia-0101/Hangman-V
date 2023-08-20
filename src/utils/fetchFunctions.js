import { periodicTable } from "./periodicTable"

// Returns a list of categories
export function fetchCategories(callback) {
    fetch("https://www.wordgamedb.com/api/v1/categories")
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error))
}

// Returns a random word based on selected category
// If category = chemical elements, random word is selected from a list of words and random data are generated
export function fetchWords(category, callback) {
    if (category === "chemical elements") {
        const element = periodicTable[Math.floor(Math.random() * periodicTable.length)]
        const randomData = {
            word: element.element_name.toLowerCase(),
            category: "chemical elements",
            info: {
                element_name: element.element_name,
                element_symbol: element.element_symbol,
                atomic_number: element.atomic_number,
                name_origin: element.origin_of_name
            }
        }
        callback(randomData)
    }
    // If category = random, a random word is fetched from db
    else if (category === "random") {
        fetch("https://www.wordgamedb.com/api/v1/words/random/")
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.log(error))
    }
    // If a category is specified, a request for random word from the category is made
    else {
        fetch("https://www.wordgamedb.com/api/v1/words/?category=" + category)
            .then(response => response.json())
            .then(data => {
                const randomData = data[Math.floor(Math.random() * data.length)]
                callback(randomData)
            })
            .catch(error => console.log(error))
    }

}
