# CV Generator

This project is a CV generator built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/). It allows users to fill out their personal, job, and education information, and then generate a downloadable PDF of their CV.

## Screenshot

Here is a screenshot of the CV Generator in action:
![CV Generator Screenshot](/src/assets/cv%20generator.png)

## Live Demo

Check out the live demo of the CV Generator [here](https://cvgenerator71.netlify.app/).

## Features

- Fill out personal, job, and education information
- Preview the CV in real-time
- Download the CV as a PDF

## Technologies Used

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [@react-pdf/renderer](https://react-pdf.org/)
- [Bootstrap](https://getbootstrap.com/)

## Installation

1. Clone the repository and run the application:

```bash
git clone https://github.com/eliasecasta/cv-generator.git
cd cv-generator
npm install
npm start
```

2. Open your browser and navigate to http://localhost:3000.

3. Fill out the forms with your information.

4. Click the "Download PDF" button to generate and download your CV as a PDF.

## Project Structure

src/  
├── components/  
│ ├── MainLayout.jsx  
│ ├── UserGeneralInfo.jsx  
│ ├── UserJobInfo.jsx  
│ ├── UserEducationInfo.jsx  
│ └── UserPreview.jsx  
├── styles/  
│ ├── MainLayout.css  
│ └── UserPreview.css  
├── store/  
│ └── userSlice.js  
├── App.jsx  
└── index.js

## Components

MainLayout: The main layout of the application, including navigation buttons and the preview section.
UserGeneralInfo: Form for entering personal information.
UserJobInfo: Form for entering job information.
UserEducationInfo: Form for entering education information.
UserPreview: Component for previewing the CV and generating the PDF.

## Redux Store

userSlice.js: Contains the Redux slice for managing user information, including actions for setting, resetting, and clearing user info.

## Styling

MainLayout.css: Custom CSS for the main layout.
UserPreview.css: Custom CSS for the CV preview.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
