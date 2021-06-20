var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

    library.sort((a, b) => {
        return b.libraryID - a.libraryID;
    
        // if (a.title > b.title) return 1;
        // else if (b.title < a.title) return -1;
        // else return 0;
    });
    
    console.log(library);