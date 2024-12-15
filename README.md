# Sort Apps

A React application that allows users to browse and search for apps categorized by tabs. The app dynamically updates its display based on the active tab and search input.

## Features

- **Tab-based Navigation**: Initially, the `Social` tab is active, displaying all apps under the `Social` category.
- **Search Functionality**:
  - Filters apps within the active category based on the search input.
  - Case-insensitive search.
  - Displays all apps in the active category if the search input is empty.
- **Dynamic Tab Switching**:
  - When another tab is clicked, the apps in the corresponding category are displayed.
  - Search results dynamically update as per the active tab.

## Data Structure

### Tabs List (`tabsList`)
An array of tab objects provided to the `AppStore` component.

| Key         | Data Type |
|-------------|-----------|
| `tabId`     | String    |
| `displayText` | String  |

### Apps List (`appsList`)
An array of app objects provided to the `AppStore` component.

| Key        | Data Type |
|------------|-----------|
| `appId`    | Number    |
| `appName`  | String    |
| `imageUrl` | String    |
| `category` | String    |

## Project Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Jigeesha-Yarra/Sort-Apps.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Sort-Apps
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Deployment

This project is deployed using GitHub Pages.

1. Ensure `homepage` is set correctly in `package.json`:
   ```json
   "homepage": "https://Jigeesha-Yarra.github.io/Sort-Apps"
   ```

2. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

3. Run the deploy script:
   ```bash
   npm run deploy
   ```

4. Verify the deployment at `https://Jigeesha-Yarra.github.io/Sort-Apps`.

## Folder Structure

```
Sort-Apps/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AppStore/
│   │   └── Tab/
│   ├── assets/
│   └── ...
├── package.json
└── README.md
```

## Usage

1. By default, the `Social` tab is active, displaying all apps in the `Social` category.
2. Use the search bar to filter apps by name within the active category. Search is case-insensitive.
3. Click on a different tab to view apps in the corresponding category.
