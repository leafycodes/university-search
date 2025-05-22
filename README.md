# University Search App  

A simple web application that fetches and displays universities by name or country using the [HipoLabs Universities API](https://github.com/Hipo/university-domains-list-api).  

## Features  
- 🔍 **Search by university name** or **country**  
- 🚦 **Input validation** (shows errors for empty queries)  
- 🛠️ **Error handling** (network issues, no results, etc.)  
- 🗑️ **Clear button** (auto-disables when list is empty)  

## How It Works  
1. Enter a **college name** or **country** in the input field.  
2. Results appear as a list (`<li>` elements).  
3. Use the **Clear** button to reset the list.  

## Code Highlights  
- **Async/Await** for API calls (`axios.get`)  
- **Dynamic UI updates** (`checkClear()` manages button state)  
- **User-friendly error messages** 

## API Reference
`https://github.com/Hipo/university-domains-list-api`
