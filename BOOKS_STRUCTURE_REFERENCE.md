# 📚 Books Page Structure Reference

## Current Organization

```
Books I've Covered
├── Academic & Tech Books
│   ├── Data Structures & Algorithms (2)
│   │   ├── Introduction to Algorithms [✓ Completed]
│   │   └── Grokking Algorithms [📖 Reading]
│   │
│   ├── CS Fundamentals (1)
│   │   └── Code: The Hidden Language [📖 Reading]
│   │
│   ├── Web & Database (1)
│   │   └── Computer Networks [📖 Reading]
│   │
│   └── Machine Learning & Deep Learning (3)
│       ├── Deep Learning [✓ Completed]
│       ├── NLP with Transformers [✓ Completed]
│       └── Designing ML Systems [📖 Reading]
│
└── Non-Fiction & Self-Help
    ├── Software Engineering & Career (1)
    │   └── The Pragmatic Programmer [✓ Completed]
    │
    ├── Architecture & Systems Design (1)
    │   └── Building Microservices [✓ Completed]
    │
    ├── Personal Development (1)
    │   └── Atomic Habits [📖 Reading]
    │
    └── Psychology & Decision Making (1)
        └── Thinking, Fast and Slow [📖 Reading]
```

---

## Book Data Template

Every book in the `booksData` array has this structure:

```javascript
{
    // Identifiers
    id: 1,                    // Unique number
    title: "Book Title",      // Full book title
    author: "Author Name",    // Author(s)
    
    // Links & Images
    coverUrl: "https://covers.openlibrary.org/b/isbn/...-M.jpg",
    bookLink: "https://openlibrary.org/books/...",
    
    // Categorization
    mainCategory: "Academic & Tech Books",     // or "Non-Fiction & Self-Help"
    subcategory: "Data Structures & Algorithms", // User-defined subcategory
    tags: ["Tag1", "Tag2", "Tag3"],           // 3 relevant tags
    
    // Reading Status
    rating: 5,                      // 1-5 stars
    status: "completed",            // "completed" or "reading"
    dateFinished: "Dec 2024",       // "Dec 2024" or "In Progress"
    
    // Content
    summary: "2-3 line summary...",  // Brief description
    review: "Full review and thoughts..." // Detailed personal review
}
```

---

## Customization Examples

### Add a New Subcategory

Just add a book with a new subcategory name:

```javascript
{
    id: 12,
    title: "Introduction to Programming",
    author: "Some Author",
    // ... other properties ...
    mainCategory: "Academic & Tech Books",
    subcategory: "Introduction to Programming",  // ← New subcategory
    // ... other properties ...
}
```

The page automatically reorganizes!

---

### Change a Book's Status to Reading

```javascript
{
    id: 1,
    // ... other properties ...
    status: "reading",              // Changed from "completed"
    dateFinished: "In Progress",    // Changed from "Dec 2024"
    // ... other properties ...
}
```

Statistics automatically update!

---

### Add a Book to a Different Category

```javascript
{
    id: 13,
    title: "New Book",
    // ... other properties ...
    mainCategory: "Non-Fiction & Self-Help",     // Different main category
    subcategory: "Business & Leadership",        // New subcategory
    // ... other properties ...
}
```

---

## Statistics Calculation

The page automatically calculates:
- **Total**: Count of all books
- **Completed**: Books with `status: "completed"`
- **Currently Reading**: Books with `status: "reading"`
- **Average Rating**: Sum of all ratings ÷ total books

No manual updates needed!

---

## UI Components

### Main Category Section
- **Title** with icon
- **Divider** line (gradient)
- All subcategories within that category

### Subcategory Section
- **Title** of subcategory
- **Badge** showing book count
- Grid of books below

### Book Card
- Cover image (with fallback)
- Status badge (✓ or 📖)
- Title and author
- Star rating
- Tags (first 2 shown)
- Summary
- Date/Reading status
- "View Details" button

### Modal Detail View
- Full cover image
- Title and author
- Complete rating
- Main category
- Subcategory
- All tags
- Full review
- OpenLibrary link button

---

## File Size

Current books.html: **961 lines**
- 11 books with full details
- Complete styling (CSS in head)
- Full JavaScript logic
- No external dependencies except:
  - Google Fonts (Poppins)
  - FontAwesome icons
  - OpenLibrary cover images

---

## How to Extend

### Add New Books
Simply add to `booksData` array

### Create New Subcategories
Add books with new `subcategory` name

### Change Main Categories
Add books with new `mainCategory` name

### Modify Styling
Edit CSS in `<style>` tag

### Update Logic
Edit JavaScript in `<script>` tag

No need to modify HTML structure!

---

## Quick Stats

📊 **Current Breakdown:**
- Total Books: 11
- Completed: 6
- Currently Reading: 5
- Average Rating: 4.3/5

📚 **Categories:**
- Main: 2 (Academic & Tech / Non-Fiction & Self-Help)
- Sub: 7 (DSA, CS Fundamentals, Web, ML, SWE, Architecture, Personal)

---

## Performance

✅ Fast load time (no external JS libraries)
✅ Smooth animations (0.3s transitions)
✅ Lazy loading for images
✅ Responsive grid layout
✅ Modal overlay interactions
✅ No database needed
✅ Static HTML/CSS/JS only
