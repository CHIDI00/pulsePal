# PulsePal

PulsePal is a personal health dashboard application designed to help users monitor, manage, and gain insights into their wellness data. It provides a user-friendly interface to configure health settings, view analytics, and maintain privacy preferences.

## Features

- **Dashboard:** Visualize your vital health data and trends.
- **Assistant:** Get quick actions and health-related assistance.
- **Settings:** Manage your profile, notifications, health preferences, and privacy settings.
- **Privacy & Security:** Control data sharing, analytics, and personalized insights with toggle switches.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Scroll to Top:** Smooth navigation experience with automatic scroll to top on route changes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CHIDI00/pulsePal.git
   cd pulsepal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal).

## Usage

- Navigate through the dashboard, assistant, and settings pages using the sidebar.
- Use the settings page to customize your profile, notifications, health preferences, and privacy options.
- Toggle privacy settings on or off to control data sharing and analytics.
- Enjoy smooth navigation with the scroll to top feature on route changes.

## Folder Structure

```
src/
├── assets/                 # Images, icons, and other static assets
├── components/             # Reusable UI components
│   ├── common/             # Common components like Header, SideBar
│   ├── sections/           # Page-specific sections (Dashboard, Assistant, Settings)
│   ├── ui/                 # UI elements like Button, Card, Chart
│   └── ScrollToTop.jsx     # Scroll to top component
├── layouts/                # Layout components like AppLayout
├── lib/                    # Utility functions
├── pages/                  # Page components
├── routes/                 # Route definitions and router setup
├── index.css               # Global styles
├── main.jsx                # Entry point
└── App.jsx                 # Main app component
```

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Icons

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or feedback, please contact the PulsePal team at support@pulsepal.com.
