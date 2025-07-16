// Theme Configuration System
// This file provides easy theme management for the SGLGB Assessment Platform

export interface ThemeConfig {
  name: string;
  colors: {
    // Background colors
    bgMain: string;
    bgCard: string;
    bgOverlay: string;
    
    // Text colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;
    
    // Border colors
    border: string;
    borderLight: string;
    
    // Icon colors
    icon: string;
    iconMuted: string;
    
    // Interactive states
    focus: string;
    hover: string;
    
    // Gradient colors
    gradientStart: string;
    gradientMid: string;
    gradientEnd: string;
    
    // Blob animation colors
    blob1: string;
    blob2: string;
    blob3: string;
    
    // System colors (primary, secondary, etc.)
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    success: string;
    warning: string;
    destructive: string;
  };
}

// Default DILG Theme (Light Mode)
export const dilgTheme: ThemeConfig = {
  name: "DILG Theme",
  colors: {
    // Background colors
    bgMain: "#f8f9fa",
    bgCard: "#ffffff",
    bgOverlay: "rgba(0,0,0,0.5)",
    
    // Text colors
    textPrimary: "#212529",
    textSecondary: "#495057",
    textMuted: "#6c757d",
    textInverse: "#ffffff",
    
    // Border colors
    border: "#dee2e6",
    borderLight: "#f8f9fa",
    
    // Icon colors
    icon: "#6c757d",
    iconMuted: "#adb5bd",
    
    // Interactive states
    focus: "#dc2626",
    hover: "#f8f9fa",
    
    // Gradient colors
    gradientStart: "#f8f9fa",
    gradientMid: "#fff5f5",
    gradientEnd: "#fff7ed",
    
    // Blob animation colors
    blob1: "#fecaca",
    blob2: "#fed7aa",
    blob3: "#e2e8f0",
    
    // System colors
    primary: "#dc2626",
    primaryForeground: "#ffffff",
    secondary: "#d97706",
    secondaryForeground: "#ffffff",
    success: "#28a745",
    warning: "#fd7e14",
    destructive: "#dc3545",
  }
};

// Blue Professional Theme
export const blueTheme: ThemeConfig = {
  name: "Blue Professional",
  colors: {
    // Background colors
    bgMain: "#f1f5f9",
    bgCard: "#ffffff",
    bgOverlay: "rgba(0,0,0,0.5)",
    
    // Text colors
    textPrimary: "#1e293b",
    textSecondary: "#475569",
    textMuted: "#64748b",
    textInverse: "#ffffff",
    
    // Border colors
    border: "#e2e8f0",
    borderLight: "#f1f5f9",
    
    // Icon colors
    icon: "#64748b",
    iconMuted: "#94a3b8",
    
    // Interactive states
    focus: "#3b82f6",
    hover: "#f1f5f9",
    
    // Gradient colors
    gradientStart: "#f1f5f9",
    gradientMid: "#e0f2fe",
    gradientEnd: "#e0e7ff",
    
    // Blob animation colors
    blob1: "#bfdbfe",
    blob2: "#a5f3fc",
    blob3: "#c7d2fe",
    
    // System colors
    primary: "#3b82f6",
    primaryForeground: "#ffffff",
    secondary: "#0ea5e9",
    secondaryForeground: "#ffffff",
    success: "#10b981",
    warning: "#f59e0b",
    destructive: "#ef4444",
  }
};

// Green Government Theme
export const greenTheme: ThemeConfig = {
  name: "Green Government",
  colors: {
    // Background colors
    bgMain: "#f0fdf4",
    bgCard: "#ffffff",
    bgOverlay: "rgba(0,0,0,0.5)",
    
    // Text colors
    textPrimary: "#1f2937",
    textSecondary: "#374151",
    textMuted: "#6b7280",
    textInverse: "#ffffff",
    
    // Border colors
    border: "#d1d5db",
    borderLight: "#f0fdf4",
    
    // Icon colors
    icon: "#6b7280",
    iconMuted: "#9ca3af",
    
    // Interactive states
    focus: "#059669",
    hover: "#f0fdf4",
    
    // Gradient colors
    gradientStart: "#f0fdf4",
    gradientMid: "#ecfdf5",
    gradientEnd: "#f7fee7",
    
    // Blob animation colors
    blob1: "#bbf7d0",
    blob2: "#bef264",
    blob3: "#d1fae5",
    
    // System colors
    primary: "#059669",
    primaryForeground: "#ffffff",
    secondary: "#65a30d",
    secondaryForeground: "#ffffff",
    success: "#10b981",
    warning: "#f59e0b",
    destructive: "#ef4444",
  }
};

// Dark Theme
export const darkTheme: ThemeConfig = {
  name: "Dark Theme",
  colors: {
    // Background colors
    bgMain: "#212529",
    bgCard: "#343a40",
    bgOverlay: "rgba(0,0,0,0.7)",
    
    // Text colors
    textPrimary: "#f8f9fa",
    textSecondary: "#dee2e6",
    textMuted: "#adb5bd",
    textInverse: "#212529",
    
    // Border colors
    border: "#495057",
    borderLight: "#6c757d",
    
    // Icon colors
    icon: "#adb5bd",
    iconMuted: "#6c757d",
    
    // Interactive states
    focus: "#ef4444",
    hover: "#495057",
    
    // Gradient colors
    gradientStart: "#212529",
    gradientMid: "#2d1b1b",
    gradientEnd: "#2d1f1a",
    
    // Blob animation colors
    blob1: "#ef4444",
    blob2: "#f59e0b",
    blob3: "#6c757d",
    
    // System colors
    primary: "#ef4444",
    primaryForeground: "#ffffff",
    secondary: "#f59e0b",
    secondaryForeground: "#ffffff",
    success: "#28a745",
    warning: "#fd7e14",
    destructive: "#dc3545",
  }
};

// Available themes
export const themes = {
  dilg: dilgTheme,
  blue: blueTheme,
  green: greenTheme,
  dark: darkTheme,
};

// Function to apply theme to CSS variables
export function applyTheme(theme: ThemeConfig): void {
  const root = document.documentElement;
  
  // Apply theme variables to CSS custom properties
  root.style.setProperty('--theme-bg-main', theme.colors.bgMain);
  root.style.setProperty('--theme-bg-card', theme.colors.bgCard);
  root.style.setProperty('--theme-bg-overlay', theme.colors.bgOverlay);
  
  root.style.setProperty('--theme-text-primary', theme.colors.textPrimary);
  root.style.setProperty('--theme-text-secondary', theme.colors.textSecondary);
  root.style.setProperty('--theme-text-muted', theme.colors.textMuted);
  root.style.setProperty('--theme-text-inverse', theme.colors.textInverse);
  
  root.style.setProperty('--theme-border', theme.colors.border);
  root.style.setProperty('--theme-border-light', theme.colors.borderLight);
  
  root.style.setProperty('--theme-icon', theme.colors.icon);
  root.style.setProperty('--theme-icon-muted', theme.colors.iconMuted);
  
  root.style.setProperty('--theme-focus', theme.colors.focus);
  root.style.setProperty('--theme-hover', theme.colors.hover);
  
  root.style.setProperty('--theme-gradient-start', theme.colors.gradientStart);
  root.style.setProperty('--theme-gradient-mid', theme.colors.gradientMid);
  root.style.setProperty('--theme-gradient-end', theme.colors.gradientEnd);
  
  root.style.setProperty('--theme-blob-1', theme.colors.blob1);
  root.style.setProperty('--theme-blob-2', theme.colors.blob2);
  root.style.setProperty('--theme-blob-3', theme.colors.blob3);
  
  // Apply system colors as well
  root.style.setProperty('--primary', theme.colors.primary);
  root.style.setProperty('--primary-foreground', theme.colors.primaryForeground);
  root.style.setProperty('--secondary', theme.colors.secondary);
  root.style.setProperty('--secondary-foreground', theme.colors.secondaryForeground);
  root.style.setProperty('--success', theme.colors.success);
  root.style.setProperty('--warning', theme.colors.warning);
  root.style.setProperty('--destructive', theme.colors.destructive);
}

// Function to get theme by name
export function getTheme(themeName: keyof typeof themes): ThemeConfig {
  return themes[themeName];
}

// Function to switch theme
export function switchTheme(themeName: keyof typeof themes): void {
  const theme = getTheme(themeName);
  applyTheme(theme);
  
  // Save theme preference to localStorage
  localStorage.setItem('selectedTheme', themeName);
}

// Function to load saved theme
export function loadSavedTheme(): void {
  const savedTheme = localStorage.getItem('selectedTheme') as keyof typeof themes;
  if (savedTheme && themes[savedTheme]) {
    applyTheme(themes[savedTheme]);
  } else {
    // Default to DILG theme
    applyTheme(dilgTheme);
  }
}

// Helper function to create a custom theme
export function createCustomTheme(name: string, colors: Partial<ThemeConfig['colors']>): ThemeConfig {
  return {
    name,
    colors: {
      ...dilgTheme.colors,
      ...colors,
    }
  };
}

// Usage Examples:
// 
// 1. Switch to blue theme:
//    switchTheme('blue');
// 
// 2. Create a custom theme:
//    const customTheme = createCustomTheme('Custom Red', {
//      primary: '#dc2626',
//      secondary: '#991b1b',
//      bgMain: '#fef2f2',
//      bgCard: '#ffffff',
//    });
//    applyTheme(customTheme);
// 
// 3. Load saved theme on app initialization:
//    loadSavedTheme(); 