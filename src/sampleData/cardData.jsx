import reading from '../images/reading.jpeg';
import genres from '../images/select-genres.jpg';
import write from '../images/write.jfif';   
import readlocal from '../images/read-local.jfif';   
import search from '../images/search.jpg';  

const CardItems = [
    {
        imgSrc: search,
        title: "Browse",
        text: "Browse to filter out a book of your choice"
    },
    {
        imgSrc: genres,
        title: "Select Genre",
        text: "Select a genre from a list of genres"
    },
    {
        imgSrc: write,
        title: "Write A Story",
        text: "Write a story and publish for others users to read"
    },
    {
        imgSrc: reading,
        title: "Read from famous authors",
        text: "Read a book from well-known authors"
    },
    {
        imgSrc: readlocal,
        title: "Read from local authors",
        text: "Read a story from local authors"
    }
];

export default CardItems;