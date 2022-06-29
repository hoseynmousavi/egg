const eggConstant = [
    {id: 1, name: "مرغ", sTemp: "37.5", sHumidity: "60", hTemp: "37.2", hHumidity: "70", days: "21"},
    {id: 2, name: "بوقلمون", sTemp: "38", sHumidity: "60", hTemp: "37.2", hHumidity: "70", days: "28"},
    {id: 3, name: "اردک", sTemp: "38", sHumidity: "65", hTemp: "37.2", hHumidity: "75", days: "28"},
    {id: 4, name: "غاز", sTemp: "38", sHumidity: "65", hTemp: "37.2", hHumidity: "75", days: "30"},
    {id: 5, name: "بلدرچین", sTemp: "37.7", sHumidity: "65", hTemp: "37.2", hHumidity: "70", days: "17"},
    {id: 6, name: "قرقاول", sTemp: "37.6", sHumidity: "60", hTemp: "37.2", hHumidity: "75", days: "25"},
    {id: 7, name: "شترمرغ", sTemp: "36.3", sHumidity: "25", hTemp: "36.6", hHumidity: "30", days: "42"},
    {id: 8, name: "کبک", sTemp: "37.5", sHumidity: "60", hTemp: "37", hHumidity: "70", days: "24"},
    {id: 9, name: "کبوتر", sTemp: "37.5", sHumidity: "60", hTemp: "37", hHumidity: "70", days: "17"},
    {id: 10, name: "قو", sTemp: "37.5", sHumidity: "65", hTemp: "37", hHumidity: "75", days: "35"},
    {id: 11, name: "مرغ عشق", sTemp: "37.5", sHumidity: "63", hTemp: "37.2", hHumidity: "75", days: "18"},
    {id: 12, name: "مرغ مینا", sTemp: "38", sHumidity: "60", hTemp: "37.5", hHumidity: "70", days: "17"},
    {id: 13, name: "عروس هلندی", sTemp: "37.5", sHumidity: "60", hTemp: "37.2", hHumidity: "70", days: "20"},
    {id: 14, name: "کاسکو", sTemp: "37.5", sHumidity: "63", hTemp: "37.2", hHumidity: "75", days: "28"},
    {id: 15, name: "کاکادو", sTemp: "37.5", sHumidity: "60", hTemp: "37.2", hHumidity: "75", days: "30"},
    {id: 16, name: "ماکائو", sTemp: "37.5", sHumidity: "63", hTemp: "37.2", hHumidity: "75", days: "24"},
    {id: 17, name: "فنچ", sTemp: "37.5", sHumidity: "58", hTemp: "37.2", hHumidity: "70", days: "12"},
    {id: 18, name: "قناری", sTemp: "38", sHumidity: "60", hTemp: "37.2", hHumidity: "72", days: "14"},
    {id: 19, name: "طاووس", sTemp: "37.7", sHumidity: "65", hTemp: "37.2", hHumidity: "75", days: "27"},
    {id: 20, name: "مرغ گینه‌ای", sTemp: "37.5", sHumidity: "60", hTemp: "37.2", hHumidity: "65", days: "26"},
]

export default eggConstant.reduce((sum, item) => ({...sum, [item.id]: item}), {})