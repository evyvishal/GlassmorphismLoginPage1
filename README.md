# Glassmorphism Login Page

A modern, visually stunning login page featuring glassmorphism design effects with customizable themes and responsive layout.

## project preview link - https://evyvishal.github.io/GlassmorphismLoginPage1/

## 🎨 Features

- **Glassmorphism Design**: Beautiful frosted glass effects with backdrop blur and transparency
- **Theme Customization**: 6 different color themes to choose from
- **Responsive Layout**: Works perfectly on all device sizes
- **Smooth Animations**: Subtle hover effects and transitions
- **Modern UI**: Clean, minimalist design with circular decorative elements
- **Interactive Elements**: Form inputs with focus animations and button hover effects

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with CSS variables, flexbox, and backdrop-filter
- **Vanilla JavaScript**: Dynamic theme switching functionality
- **No External Dependencies**: Pure HTML, CSS, and JavaScript

## 📱 Preview

The login page features:
- Centralized login form with glassmorphism effect
- Username and password input fields with smooth focus animations
- Submit button with scale hover effect
- "Register" and "Forget Password" links
- Theme switcher in bottom-left corner
- Decorative circular elements in background

## 🎯 Color Themes

Choose from 6 pre-designed themes:
1. **Light Theme** - Clean white background with orange accents
2. **Dark Red** - Deep red background with pink accents
3. **Gray Scale** - Professional gray theme
4. **Blue Sky** - Light blue with purple accents
5. **Pink Rose** - Soft pink theme
6. **Dark Mode** - Classic dark theme with blue-gray accents

## 🛠️ Setup & Usage

1. **Clone or Download** the project files
2. **Open** `learn1.html` in any modern web browser
3. **Click** the theme buttons in the bottom-left to change colors
4. **Enjoy** the beautiful glassmorphism login experience!

## 📁 Project Structure

```
GlassmorphismLoginPage1/
├── learn1.html          # Main HTML file
├── style.css           # All styling and glassmorphism effects
├── script.js           # Theme switching functionality
├── toto.png            # Decorative illustration image
├── .gitattributes      # Git configuration
└── README.md           # This file
```

## 🎭 Design Details

### Glassmorphism Effects
- **Backdrop-filter: blur(20px)** for frosted glass effect
- **Semi-transparent backgrounds** with rgba colors
- **Box shadows** for depth and layering
- **Border radius** for smooth, modern edges

### Responsive Design
- **Flexbox layout** for perfect centering
- **Relative units** (rem, %) for scalability
- **Mobile-friendly** form inputs and buttons

### Interactive Elements
- **Focus animations** on form inputs
- **Scale transform** on button hover
- **Smooth transitions** on all interactive elements
- **Theme button hover** effects

## 🌟 Browser Support

- **Chrome** 76+ (backdrop-filter support)
- **Firefox** 70+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** with modern CSS support

## 📝 Customization

### Adding New Themes
Edit the `themes` array in `script.js`:
```javascript
const themes = [
    {
        background: "#your-color",
        color: "#text-color",
        primaryColor: "#accent-color"
    },
    // Add your custom theme here
];
```

### Modifying Glassmorphism
Adjust these CSS properties in `style.css`:
```css
.form-container {
    backdrop-filter: blur(20px); /* Change blur intensity */
    background-color: rgba(255, 255, 255, 0.1); /* Change transparency */
}
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements or additional features!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Created with ❤️ using modern web technologies**
