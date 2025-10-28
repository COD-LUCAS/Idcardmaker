# 🎓 Student ID Card Generator

A modern, professional web application for creating student identification cards instantly. Built with Next.js, React, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)

## ✨ Features

- 📝 **Easy Form Input** - Simple and intuitive form to enter student details
- 📸 **Photo Upload** - Upload student photos directly from your device
- 🎨 **Professional Design** - Clean, modern ID card layout
- 📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
- 💾 **Print/Save** - Download as PDF or print directly
- ⚡ **Instant Generation** - Real-time ID card preview
- 🔄 **Reset Function** - Quickly start over with new data

## 🚀 Demo

[Live Demo](https://your-vercel-url.vercel.app)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-id-generator.git
   cd student-id-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/student-id-generator)

### Manual Deployment

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

## 📸 Screenshots

### Input Form
![Input Form](https://via.placeholder.com/800x450?text=Input+Form+Screenshot)

### Generated ID Card
![ID Card](https://via.placeholder.com/800x450?text=ID+Card+Screenshot)

## 🎯 Usage

1. **Fill in Student Details**
   - Enter student name
   - Enter student ID number
   - Enter department/course
   - Select year
   - Select blood group (optional)
   - Select date of birth
   - Select valid until date

2. **Upload Photo**
   - Click on the upload area
   - Select a student photo from your device
   - Preview appears automatically

3. **Generate ID Card**
   - Click "Generate ID Card" button
   - View the generated card on the right

4. **Download/Print**
   - Click "Print / Save as PDF" button
   - Choose to save as PDF or print directly

## 🏗️ Project Structure

```
student-id-generator/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.js            # Root layout component
│   └── page.js              # Main application component
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit
- **[Vercel](https://vercel.com/)** - Deployment platform

## 📝 Configuration

### Customize University Name

Edit `app/page.js` and find:

```javascript
<h3 className="text-center text-2xl font-bold tracking-wide">UNIVERSITY NAME</h3>
```

Replace `UNIVERSITY NAME` with your institution's name.

### Customize Colors

Edit `app/page.js` to change the color scheme:

```javascript
// Change gradient colors
className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700"

// Change to your preferred colors
className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-700"
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/COD-LUCAS)
- Website: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- Design inspiration from modern ID card systems
- Built with love using Next.js and Tailwind CSS

## 📞 Support

For support, email support@yourwebsite.com or open an issue in the GitHub repository.

## 🔮 Future Enhancements

- [ ] QR code generation with student information
- [ ] Multiple ID card templates
- [ ] Batch ID card generation from CSV
- [ ] Digital signature support
- [ ] Barcode generation
- [ ] Export to various formats (PNG, JPG, PDF)
- [ ] Database integration for storing student data
- [ ] Admin dashboard for managing students

## ⚙️ Environment Variables

No environment variables required for basic functionality.

## 🐛 Known Issues

- Print function requires browser's print dialog
- Large images may take time to upload
- Works best on modern browsers (Chrome, Firefox, Safari, Edge)

---

<div align="center">
  <p>Made with ❤️ using Next.js</p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>
