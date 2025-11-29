# Dark Mode / Light Mode Toggle Implementation

This document explains the dark mode toggle feature implemented in the e-DAM web application.

## 🎨 Features

- ✅ **Smooth Theme Switching**: Toggle between dark and light modes with a single click
- ✅ **Persistent Storage**: User's theme preference is saved in localStorage and persists across sessions
- ✅ **No Flash of Unstyled Content (FOUC)**: Theme is applied immediately on page load
- ✅ **System Preference Detection**: Automatically detects user's system theme preference on first visit
- ✅ **Dynamic Icons**: Sun icon for light mode, moon icon for dark mode
- ✅ **Responsive Design**: Theme toggle button works seamlessly on desktop, tablet, and mobile devices
- ✅ **Accessibility**: Proper ARIA labels and screen reader support

## 📁 File Structure

```
src/
├── components/
│   ├── ThemeProvider.tsx      # Context provider for theme management
│   ├── ThemeToggle.tsx         # Theme toggle button component
│   └── Header.tsx              # Updated with theme toggle
├── hooks/
│   └── use-theme.ts            # Custom hook for theme management (standalone option)
└── index.html                  # Updated with FOUC prevention script
```

## 🚀 How It Works

### 1. ThemeProvider Component

The `ThemeProvider` component wraps the entire application and manages the theme state using React Context API.

**Key Features:**
- Initializes theme from localStorage or system preference
- Applies theme class to the document root element
- Provides context for theme state and toggle function

### 2. ThemeToggle Component

A reusable button component that displays the appropriate icon and toggles the theme.

**Props:**
- `className`: Optional CSS classes
- `variant`: Button variant (default: 'ghost')
- `size`: Button size (default: 'icon')

### 3. Theme Persistence

The theme is stored in localStorage with the key `'theme'` and values `'light'` or `'dark'`.

### 4. FOUC Prevention

A script in `index.html` applies the theme class immediately on page load, before React renders, preventing any flash of the wrong theme.

## 💻 Usage

### Basic Usage

The theme toggle is automatically available in the header on all pages. Users can click the sun/moon icon to switch themes.

### Programmatic Usage

If you need to access or control the theme programmatically in your components:

```tsx
import { useThemeContext } from '@/components/ThemeProvider';

function MyComponent() {
  const { theme, toggleTheme, setTheme, isDark } = useThemeContext();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      {isDark && <p>Dark mode is active</p>}
    </div>
  );
}
```

### Custom Theme Toggle

You can create your own theme toggle button anywhere in your app:

```tsx
import { ThemeToggle } from '@/components/ThemeToggle';

function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <ThemeToggle 
        variant="outline" 
        size="default" 
        className="my-custom-class" 
      />
    </div>
  );
}
```

## 🎨 Color Schemes

### Dark Mode (Default)
- Background: `hsl(0, 0%, 0%)` - Pure black
- Foreground: `hsl(0, 0%, 100%)` - Pure white
- Primary: `hsl(270, 100%, 70%)` - Purple
- Accent: `hsl(280, 100%, 75%)` - Light purple

### Light Mode
- Background: `hsl(0, 0%, 100%)` - Pure white
- Foreground: `hsl(222.2, 84%, 4.9%)` - Dark blue-gray
- Primary: `hsl(265, 100%, 65%)` - Purple
- Accent: `hsl(265, 85%, 55%)` - Deep purple

## 🔧 Customization

### Changing Default Theme

Edit `src/App.tsx`:

```tsx
<ThemeProvider defaultTheme="light"> {/* Change to "light" */}
  {/* ... */}
</ThemeProvider>
```

### Adding More Themes

1. Update the `Theme` type in `ThemeProvider.tsx`:
```tsx
type Theme = 'light' | 'dark' | 'custom';
```

2. Add CSS variables in `src/index.css`:
```css
.custom {
  --background: /* your color */;
  --foreground: /* your color */;
  /* ... other variables */
}
```

3. Update the toggle logic to cycle through themes

### Styling the Toggle Button

The toggle button uses Tailwind CSS classes and can be customized via props or by modifying `ThemeToggle.tsx`.

## 🧪 Testing

### Manual Testing Checklist

1. ✅ Click the theme toggle button
2. ✅ Verify the theme changes instantly
3. ✅ Refresh the page - theme should persist
4. ✅ Open in a new tab - theme should match
5. ✅ Clear localStorage - should default to system preference
6. ✅ Test on mobile devices
7. ✅ Test with screen readers

### Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Theme doesn't persist
- Check browser's localStorage is enabled
- Verify localStorage key is `'theme'`

### FOUC (Flash of Unstyled Content)
- Ensure the script in `index.html` is present and runs before React
- Check that the script is in the `<head>` section

### Theme toggle not working
- Verify `ThemeProvider` wraps your entire app
- Check that `useThemeContext` is used within the provider
- Ensure Tailwind's `darkMode: ['class']` is configured

## 📝 Technical Details

### localStorage Structure
```javascript
{
  "theme": "dark" | "light"
}
```

### CSS Class Application
The theme is applied by adding a class to the HTML root element:
```html
<html class="dark">  <!-- or "light" -->
```

### Tailwind Configuration
The project uses Tailwind's class-based dark mode strategy:
```typescript
darkMode: ["class"]
```

## 🎯 Best Practices

1. **Always use the theme toggle through the ThemeProvider** - Don't manipulate the theme directly
2. **Use CSS variables** - Define colors in `index.css` for consistency
3. **Test both themes** - Ensure all components look good in both modes
4. **Respect system preferences** - The app respects user's system theme preference on first visit
5. **Accessibility** - Use appropriate color contrast ratios for both themes

## 📚 Additional Resources

- [Tailwind CSS Dark Mode Documentation](https://tailwindcss.com/docs/dark-mode)
- [React Context API](https://react.dev/reference/react/useContext)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## 🔄 Version History

- **v1.0.0** - Initial implementation with dark/light mode toggle
  - Theme persistence with localStorage
  - FOUC prevention
  - Responsive theme toggle button
  - System preference detection

---

Made with ❤️ for e-DAM
