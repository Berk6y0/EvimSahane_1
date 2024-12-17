/* General Reset */
body {
    margin: 0;
    font - family: Arial, sans - serif;
    background - color: #f9f9f9;
    color: #333;
}

/* Header Styles */
header {
    background - color: #2c3e50;
    color: white;
    padding: 1rem 2rem;
    display: flex;
    justify - content: space - between;
    align - items: center;
}

.header - container h1 {
    margin: 0;
    font - size: 1.5rem;
}

.search - bar {
    display: flex;
    align - items: center;
}

.search - bar input {
    padding: 0.5rem;
    border: none;
    border - radius: 5px;
    margin - right: 0.5rem;
}

.search - bar button {
    background - color: #2980b9;
    color: white;
    border: none;
    border - radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.auth - buttons button {
    background - color: #e74c3c;
    color: white;
    border: none;
    border - radius: 5px;
    padding: 0.5rem 1rem;
    margin - left: 0.5rem;
    cursor: pointer;
}

.auth - buttons button:hover {
    background - color: #c0392b;
}

/* Welcome Section */
.welcome - section {
    text - align: center;
    background - color: #ecf0f1;
    padding: 2rem 0;
    margin - bottom: 2rem;
}

.welcome - section h2 {
    margin: 0;
    font - size: 2rem;
}

.welcome - section p {
    margin: 0.5rem 0 0;
}

/* Highlights Section */
.highlights {
    padding: 1rem 2rem;
}

.highlights h2 {
    font - size: 1.75rem;
    margin - bottom: 1rem;
}

.listings {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(200px, 1fr));
    gap: 1rem;
}

.property - card {
    background - color: white;
    border: 1px solid #ddd;
    border - radius: 5px;
    overflow: hidden;
    text - align: center;
    padding: 1rem;
    box - shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.property - card img {
    max - width: 100 %;
    height: auto;
    margin - bottom: 0.5rem;
}

.property - card h3 {
    margin: 0.5rem 0;
    font - size: 1.25rem;
    color: #2c3e50;
}

.property - card p {
    margin: 0.25rem 0;
}
