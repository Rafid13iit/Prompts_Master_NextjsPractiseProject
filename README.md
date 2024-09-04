<img src="https://github.com/Rafid13iit/Prompts_Master_NextjsPractiseProject/blob/master/public/assets/images/cover.png?raw=true" width="750" height="400" align="center">

# Prompts Master - Next.js Practice Project

Prompts Master is a Next.js application designed for creative writing enthusiasts. It allows users to create, edit, and share creative writing prompts, explore others' prompts, and personalize their experience.

## Features

- Create and share writing prompts
- Edit existing prompts
- Explore prompts by other users
- Personalized user profiles

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB URI for database connection
- NextAuth configuration for authentication

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rafid13iit/Prompts_Master_NextjsPractiseProject.git
   cd Prompts_Master_NextjsPractiseProject
2. Install dependencies:
    ```bash
    npm install
3. Create a .env.local file in the root directory and add your environment variables:
    ```bash
    GOOGLE_ID=your-google-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret-key
    MONGODB_URI=your-mongodb-uri
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=your-next-auth-secret-key

4. Run the development server:
    ```bash
    npm run dev
Open your browser and go to http://localhost:3000.

## Usage
- Home Page: Browse or create new writing prompts.
- Create Prompt: Enter a prompt and add relevant tags.
- User Profile: View and manage your prompts.
- Update Prompt: Edit existing prompts and update details.

## Acknowledgements
Special thanks to **Adrian Hajdin** for his helpful tutorials and guidance on YouTube.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any features, bug fixes, or improvements.