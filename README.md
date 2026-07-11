# Tshigeng Holdings Website

Official website for Tshigeng Holdings, a South African facilities services company providing pest control, hygiene services, commercial cleaning, residential cleaning, and cleaning material supply.

## About Tshigeng Holdings

Tshigeng Holdings was established in 2011 and serves clients across South Africa. The website presents the company profile, core services, values, operating information, and contact details for customers who need facility support.

## Website Features

- Home page with company introduction and service overview
- About page with mission, vision, and core values
- Services page for pest control, hygiene, cleaning, and cleaning materials
- Contact page with enquiry form, phone, email, and location details
- Legal pages for privacy, cookies, terms of use, and security
- Responsive layout for desktop, tablet, and mobile devices

## Technology Stack

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Lucide React icons

## Requirements

- Node.js 18 or newer
- npm
- FTP access or cPanel File Manager access for hosting deployment

## Local Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:Lehlogonoloramphisa/Tshigeng_Holdings.git
   ```

2. Open the project folder:

   ```bash
   cd Tshigeng_Holdings
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually:

   ```text
   http://localhost:5173/
   ```

## Useful Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Build For Production

Run:

```bash
npm run build
```

Vite will create a production-ready `dist` folder. The files inside `dist` are the files that must be uploaded to the live hosting account.

## Manual cPanel Deployment Using FTP

Use this method when uploading the website manually with an FTP client such as FileZilla.

1. Build the project locally:

   ```bash
   npm run build
   ```

2. Open your FTP client and connect with the hosting FTP details from cPanel.

3. Go to the website root folder on the server. This is usually:

   ```text
   public_html
   ```

4. On your computer, open the local `dist` folder.

5. Upload the contents inside `dist` into `public_html`.

   Upload the files inside `dist`, not the `dist` folder itself.

6. Make sure `index.html` is directly inside `public_html`.

7. If the site uses direct links such as `/about`, `/services`, or `/contact`, create or update this file in `public_html`:

   ```text
   .htaccess
   ```

8. Add this content to `.htaccess`:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

9. Visit the domain in a browser and test:

   - Home page
   - About page
   - Services page
   - Contact page
   - Refreshing a page such as `/about`

## Manual cPanel Deployment Using File Manager

Use this method if you do not want to use an FTP client.

1. Build the project:

   ```bash
   npm run build
   ```

2. Compress the contents of the `dist` folder into a `.zip` file.

3. Log in to cPanel.

4. Open File Manager.

5. Go to:

   ```text
   public_html
   ```

6. Upload the `.zip` file.

7. Extract the `.zip` file inside `public_html`.

8. Confirm that `index.html`, `assets`, and the other build files are directly inside `public_html`.

9. Add the `.htaccess` file shown above if it is not already present.

10. Delete the uploaded `.zip` file after extraction.

## Updating The Live Site

Whenever the website changes:

1. Pull the latest code or make the changes locally.
2. Run:

   ```bash
   npm install
   npm run build
   ```

3. Upload the new contents of `dist` to `public_html`.
4. Replace the old files when prompted.
5. Clear the browser cache if the old version still appears.

## Notes For Subfolder Deployment

If the website is deployed to a subfolder such as:

```text
https://example.com/tshigeng/
```

the Vite base path may need to be configured before building. For the main domain or `public_html` root deployment, no base path change is needed.

## Repository

GitHub:

```text
git@github.com:Lehlogonoloramphisa/Tshigeng_Holdings.git
```
