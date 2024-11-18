# Job Listing React App

A simple React app that fetches job data from an ASP.NET Core API and displays it in a user-friendly manner. The app is built using React with TypeScript and styled with Material-UI.

## Features

- Fetches job data from a REST API (`GET /api/jobs`).
- Displays job titles, descriptions, and a list of sub-items for each job.
- Sub-items are displayed with status labels (e.g., "completed", "in-progress", "pending") with color coding.
- Simple and clean user interface using Material-UI for styling.
- Responsive design that works well on both desktop and mobile screens.

## Technologies Used

- **Frontend:** React, TypeScript, Material-UI
- **Backend:** ASP.NET Core (for the API)
- **State Management:** React's `useState`, `useEffect`
- **API Request:** Axios for HTTP requests

## Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- An ASP.NET Core API that provides job data via `GET /api/jobs`.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/job-listing-app.git
cd job-listing-app
