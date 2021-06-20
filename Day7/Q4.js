var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
    
    for (const book of library) {
        console.log(`
        book name: ${book.title}
        author: ${book.author}
        readingStatus: ${book.readingStatus ? 'already read' : 'not yet read'}
        `);
    }