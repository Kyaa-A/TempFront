# Global Theme System Documentation

## Overview

This theme system allows you to change the entire color scheme of your application by modifying CSS variables instead of individual `bg-*` or `color-*` classes. This makes theming much more maintainable and flexible.

## Quick Start

### 1. Using Theme Classes

Instead of using hardcoded Tailwind classes, use the theme-based classes:

```tsx
// ❌ Old way (hardcoded colors)
<div className="bg-white text-gray-900 border-gray-200">
  <p className="text-gray-600">Some text</p>
</div>

// ✅ New way (theme-based)
<div className="bg-theme-card text-theme-primary border-theme">
  <p className="text-theme-muted">Some text</p>
</div>
```

### 2. Switching Themes Programmatically

```tsx
import { switchTheme } from "@/lib/theme-config";

// Switch to different themes
switchTheme("blue"); // Blue professional theme
switchTheme("green"); // Green government theme
switchTheme("dark"); // Dark theme
switchTheme("dilg"); // Default DILG theme
```

### 3. Creating Custom Themes

```tsx
import { createCustomTheme, applyTheme } from "@/lib/theme-config";

const customTheme = createCustomTheme("Custom Purple", {
  primary: "#8b5cf6",
  secondary: "#a855f7",
  bgMain: "#faf5ff",
  bgCard: "#ffffff",
  textPrimary: "#1f2937",
  // ... other colors
});

applyTheme(customTheme);
```

## Available Theme Classes

### Background Classes

- `bg-theme-main` - Main background color
- `bg-theme-card` - Card/form background color
- `bg-theme-overlay` - Overlay background color
- `bg-theme-gradient` - Gradient background

### Text Classes

- `text-theme-primary` - Primary text color
- `text-theme-secondary` - Secondary text color
- `text-theme-muted` - Muted text color
- `text-theme-inverse` - Inverse text color (for dark backgrounds)

### Border Classes

- `border-theme` - Default border color
- `border-theme-light` - Light border color

### Icon Classes

- `text-theme-icon` - Default icon color
- `text-theme-icon-muted` - Muted icon color

### Interactive Classes

- `focus-theme` - Focus state styling
- `hover-theme` - Hover state styling

### Component Classes

- `input-theme` - Themed input fields
- `card-theme` - Themed card container
- `btn-theme-primary` - Primary button theme
- `btn-theme-secondary` - Secondary button theme

### Animation Classes

- `blob-theme-1` - First blob animation color
- `blob-theme-2` - Second blob animation color
- `blob-theme-3` - Third blob animation color

## Built-in Themes

### 1. DILG Theme (Default)

- Primary: Red (#dc2626)
- Secondary: Gold (#d97706)
- Background: Light gray (#f8f9fa)

### 2. Blue Professional

- Primary: Blue (#3b82f6)
- Secondary: Sky blue (#0ea5e9)
- Background: Slate gray (#f1f5f9)

### 3. Green Government

- Primary: Green (#059669)
- Secondary: Lime (#65a30d)
- Background: Green tint (#f0fdf4)

### 4. Dark Theme

- Primary: Light red (#ef4444)
- Secondary: Amber (#f59e0b)
- Background: Dark gray (#212529)

## Customization Guide

### Option 1: Modify Existing Themes

Edit `src/lib/theme-config.ts` and modify the theme objects:

```tsx
export const dilgTheme: ThemeConfig = {
  name: "DILG Theme",
  colors: {
    primary: "#your-new-color",
    secondary: "#your-secondary-color",
    bgMain: "#your-background-color",
    // ... other colors
  },
};
```

### Option 2: Create New Themes

Add new themes to the `themes` object:

```tsx
const myCustomTheme: ThemeConfig = {
  name: "My Custom Theme",
  colors: {
    primary: "#your-color",
    // ... define all colors
  },
};

export const themes = {
  dilg: dilgTheme,
  blue: blueTheme,
  green: greenTheme,
  dark: darkTheme,
  custom: myCustomTheme, // Add your theme here
};
```

### Option 3: Runtime Theme Creation

Create themes dynamically at runtime:

```tsx
const createSeasonalTheme = (season: string) => {
  const seasonColors = {
    spring: { primary: "#10b981", bgMain: "#f0fdf4" },
    summer: { primary: "#f59e0b", bgMain: "#fffbeb" },
    autumn: { primary: "#dc2626", bgMain: "#fef2f2" },
    winter: { primary: "#3b82f6", bgMain: "#eff6ff" },
  };

  return createCustomTheme(`${season} Theme`, seasonColors[season]);
};

// Usage
const springTheme = createSeasonalTheme("spring");
applyTheme(springTheme);
```

## Migration Guide

### From Hardcoded Colors

1. **Replace background classes:**

   ```tsx
   // Before
   className = "bg-white";
   // After
   className = "bg-theme-card";
   ```

2. **Replace text classes:**

   ```tsx
   // Before
   className = "text-gray-900";
   // After
   className = "text-theme-primary";
   ```

3. **Replace border classes:**
   ```tsx
   // Before
   className = "border-gray-200";
   // After
   className = "border-theme";
   ```

### From Input Components

```tsx
// Before
<input className="border border-gray-300 bg-white text-gray-900" />

// After
<input className="input-theme" />
```

### From Card Components

```tsx
// Before
<div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6">

// After
<div className="card-theme">
```

## Best Practices

1. **Always use theme classes** instead of hardcoded colors
2. **Test your components** with different themes to ensure they work correctly
3. **Use semantic color names** when creating custom themes
4. **Provide fallback colors** for unsupported browsers
5. **Document custom themes** for your team

## Advanced Usage

### Theme Persistence

The theme system automatically saves the selected theme to localStorage:

```tsx
// Theme will be remembered across browser sessions
switchTheme("blue");
```

### Theme Detection

```tsx
// Check current theme
const currentTheme = localStorage.getItem("selectedTheme");

// Load saved theme on app start
import { loadSavedTheme } from "@/lib/theme-config";
loadSavedTheme(); // Call this in your app initialization
```

### CSS Variable Access

You can also access theme variables directly in CSS:

```css
.my-component {
  background-color: var(--theme-bg-card);
  color: var(--theme-text-primary);
  border: 1px solid var(--theme-border);
}
```

## Demo Component

Use the `ThemeDemo` component to test and showcase the theme system:

```tsx
import { ThemeDemo } from "@/components/shared/ThemeDemo";

export default function TestPage() {
  return <ThemeDemo />;
}
```

## Troubleshooting

### Theme Not Applying

1. Make sure you're calling `loadSavedTheme()` on app initialization
2. Check that CSS variables are properly defined in `globals.css`
3. Verify the theme classes are being applied correctly

### Colors Not Changing

1. Clear browser cache
2. Check for CSS specificity issues
3. Ensure you're using theme classes, not hardcoded colors

### Performance Issues

1. Avoid creating themes frequently at runtime
2. Use the built-in themes when possible
3. Consider memoizing custom theme creation

## Examples

### Login Form with Theme

```tsx
export function LoginForm() {
  return (
    <div className="card-theme">
      <h1 className="text-theme-primary">Welcome</h1>
      <input className="input-theme" placeholder="Email" />
      <button className="btn-theme-primary">Sign In</button>
    </div>
  );
}
```

### Dashboard with Theme

```tsx
export function Dashboard() {
  return (
    <div className="bg-theme-main min-h-screen">
      <div className="card-theme">
        <h2 className="text-theme-primary">Dashboard</h2>
        <p className="text-theme-muted">Welcome back!</p>
      </div>
    </div>
  );
}
```

This theme system provides a solid foundation for maintaining consistent styling across your application while making it easy to switch between different color schemes or create custom themes as needed.
