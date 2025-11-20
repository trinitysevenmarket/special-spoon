document.addEventListener('DOMContentLoaded', () => {
    // Array of Verses 
    const verses = [
        { 
            book: 'JOHN', 
            chapter_verse: '3:16', 
            version: 'NIV', 
            text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' 
        },
        { 
            book: 'ROMANS', 
            chapter_verse: '8:28', 
            version: 'KJV', 
            text: 'And we know that all things work together for good to them that love God, to them who are called according to his purpose.' 
        },
        { 
            book: 'PSALM', 
            chapter_verse: '23:4', 
            version: 'NES', 
            text: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.' 
        },
        { 
            book: 'PHILIPPIANS', 
            chapter_verse: '4:13', 
            version: 'NIV', 
            text: 'I can do all this through him who gives me strength.' 
        }
    ];

    // Select a random verse from the array
    const randomIndex = Math.floor(Math.random() * verses.length);
    const selectedVerse = verses[randomIndex];

    // Get the DOM elements
    const bookChapterElement = document.querySelector('.book-chapter');
    const verseTextElement = document.querySelector('.verse-text');
    const referenceBox = document.querySelector('.reference-box');

    // Update the HTML content
    if (selectedVerse) {
        bookChapterElement.textContent = selectedVerse.book;
        verseTextElement.textContent = selectedVerse.text;
        referenceBox.textContent = `${selectedVerse.chapter_verse} ${selectedVerse.version}`;
    } else {
        // Fallback text 
        bookChapterElement.textContent = 'ERROR';
        verseTextElement.textContent = 'Could not load verse. Please check script.';
        referenceBox.textContent = '';
    }
});
