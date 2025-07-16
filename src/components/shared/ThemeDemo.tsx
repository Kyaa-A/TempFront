"use client";

import { useState, useEffect } from 'react';
import { switchTheme, themes, loadSavedTheme, createCustomTheme, applyTheme, type ThemeConfig } from '@/lib/theme-config';
import { Button } from '@/components/ui/button';

export function ThemeDemo() {
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>('dilg');
  const [isCustomTheme, setIsCustomTheme] = useState(false);

  useEffect(() => {
    // Load saved theme on component mount
    loadSavedTheme();
    
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('selectedTheme') as keyof typeof themes;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const handleThemeChange = (themeName: keyof typeof themes) => {
    switchTheme(themeName);
    setCurrentTheme(themeName);
    setIsCustomTheme(false);
  };

  const handleCustomTheme = () => {
    // Example custom theme - you can modify these colors
    const customTheme = createCustomTheme('Custom Purple', {
      primary: '#8b5cf6',
      secondary: '#a855f7',
      bgMain: '#faf5ff',
      bgCard: '#ffffff',
      textPrimary: '#1f2937',
      textSecondary: '#4b5563',
      textMuted: '#6b7280',
      border: '#e5e7eb',
      borderLight: '#f3f4f6',
      focus: '#8b5cf6',
      gradientStart: '#faf5ff',
      gradientMid: '#f3e8ff',
      gradientEnd: '#ede9fe',
      blob1: '#ddd6fe',
      blob2: '#c4b5fd',
      blob3: '#e0e7ff',
    });
    
    applyTheme(customTheme);
    setIsCustomTheme(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="card-theme mb-6">
        <h2 className="text-2xl font-bold text-theme-primary mb-4">Theme Configuration Demo</h2>
        <p className="text-theme-muted mb-6">
          This demonstrates the global theme system. Click the buttons below to switch between different color schemes.
        </p>
        
        {/* Theme Selector */}
        <div className="flex flex-wrap gap-3 mb-6">
          <Button
            onClick={() => handleThemeChange('dilg')}
            variant={currentTheme === 'dilg' && !isCustomTheme ? 'default' : 'outline'}
          >
            DILG Theme
          </Button>
          <Button
            onClick={() => handleThemeChange('blue')}
            variant={currentTheme === 'blue' && !isCustomTheme ? 'default' : 'outline'}
          >
            Blue Professional
          </Button>
          <Button
            onClick={() => handleThemeChange('green')}
            variant={currentTheme === 'green' && !isCustomTheme ? 'default' : 'outline'}
          >
            Green Government
          </Button>
          <Button
            onClick={() => handleThemeChange('dark')}
            variant={currentTheme === 'dark' && !isCustomTheme ? 'default' : 'outline'}
          >
            Dark Theme
          </Button>
          <Button
            onClick={handleCustomTheme}
            variant={isCustomTheme ? 'default' : 'outline'}
          >
            Custom Purple
          </Button>
        </div>

        {/* Theme Preview */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-theme-primary mb-3">Theme Preview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Color Swatches */}
              <div className="space-y-3">
                <h4 className="font-medium text-theme-secondary">Colors</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--primary)' }}></div>
                    <span className="text-xs text-theme-muted">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--secondary)' }}></div>
                    <span className="text-xs text-theme-muted">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--success)' }}></div>
                    <span className="text-xs text-theme-muted">Success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: 'var(--warning)' }}></div>
                    <span className="text-xs text-theme-muted">Warning</span>
                  </div>
                </div>
              </div>

              {/* Text Examples */}
              <div className="space-y-3">
                <h4 className="font-medium text-theme-secondary">Typography</h4>
                <div className="space-y-1">
                  <p className="text-theme-primary">Primary text</p>
                  <p className="text-theme-secondary">Secondary text</p>
                  <p className="text-theme-muted">Muted text</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Example */}
          <div>
            <h4 className="font-medium text-theme-secondary mb-3">Form Elements</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-theme-secondary mb-1">
                  Example Input
                </label>
                <input
                  type="text"
                  className="input-theme"
                  placeholder="This uses the theme system"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="default">Primary Button</Button>
                <Button variant="outline">Outline Button</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div className="card-theme">
        <h3 className="text-lg font-semibold text-theme-primary mb-3">How to Use</h3>
        <div className="space-y-4 text-theme-muted">
          <div>
            <h4 className="font-medium text-theme-secondary">1. Using Theme Classes</h4>
            <p className="text-sm">Use classes like `text-theme-primary`, `bg-theme-card`, `border-theme`, etc.</p>
          </div>
          
          <div>
            <h4 className="font-medium text-theme-secondary">2. Switching Themes Programmatically</h4>
            <code className="block bg-theme-main p-2 rounded text-sm">
              {`import { switchTheme } from '@/lib/theme-config';
switchTheme('blue'); // Switch to blue theme`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium text-theme-secondary">3. Creating Custom Themes</h4>
            <code className="block bg-theme-main p-2 rounded text-sm">
              {`const customTheme = createCustomTheme('My Theme', {
  primary: '#your-color',
  bgMain: '#your-bg-color',
  // ... other colors
});
applyTheme(customTheme);`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeDemo; 