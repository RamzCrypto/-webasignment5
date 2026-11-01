# Assignment #5 – JavaScript Basics (DOM Manipulation & Events)

## Student
- **Name:** Bazaraly Ramazan
- **Group:** SE-2526
- **Repository:** [https://github.com/RamzCrypto/-webasignment5](https://github.com/RamzCrypto/-webasignment5)

## Description
This project is a single-page application that demonstrates the fundamentals of JavaScript:
working with the DOM and handling events. Each task from the assignment is implemented
in its own section, accessible via the navigation bar.

## Tasks Implemented
| Task | Description |
|------|-------------|
| Task 0 | First script (console.log + alert) |
| Task 1 | Variables & operators (string, number, boolean, arithmetic, concatenation) |
| Task 2 | Changing paragraph content via button |
| Task 3 | Changing background color and font size of a `<div>` |
| Task 4 | Adding and removing `<li>` elements from a list |
| Task 5 | Mouse events (`mouseover` / `mouseout`) on a colored box |
| Task 6 | Live input display using the `keyup` event |
| Task 7 | Basic calculator (+, −, ×, ÷) |
| Task 8 | Interactive To-Do List with add, delete, and complete features |

## File Structure
assignment5/
├── index.html – Main HTML page with all task sections
├── style.css – Styling for the page and components
├── script.js – All JavaScript logic for every task
└── README.md – Project documentation

text

## How to Run Locally
1. Clone the repository or download the files.
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge).
3. Use the navigation bar to jump to each task.
4. Open the browser console (F12 → Console) to see the output of Task 0 and Task 1.

## How to Deploy (GitHub Pages)
1. Push the project to a public GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Branch**, select `main` and the `/root` folder, then click **Save**.
4. Your site will be available at `https://RamzCrypto.github.io/-webasignment5/`.

## How to Deploy (Netlify)
1. Drag and drop the project folder onto [Netlify Drop](https://app.netlify.com/drop).
2. Netlify will provide a live URL instantly.

## Notes
- No external libraries or frameworks are used – pure HTML, CSS, and JavaScript.
- The To-Do List stores tasks temporarily in an array (no localStorage), as required.
Also, remember to update the index.html header with your details:

html
<header>
  <h1>Assignment #5 – JavaScript Basics</h1>
  <p><strong>Student:</strong> Bazaraly Ramazan | <strong>Group:</strong> SE-2625</p>
</header>
And in script.js (Task 0), update the console output:

javascript
console.log("Student: Bazaraly Ramazan");
console.log("Group: SE-2625");