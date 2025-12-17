# Contributing Guide

Thank you for your interest in contributing to the Sammunat LLC landing page project!

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork**:
```bash
git clone https://github.com/your-username/sammunat-landing-page.git
cd sammunat-landing-page
```

3. **Install dependencies**:
```bash
npm install
```

4. **Create a new branch**:
```bash
git checkout -b feature/your-feature-name
```

5. **Make your changes** and test thoroughly

6. **Commit your changes**:
```bash
git add .
git commit -m "feat: add your feature description"
```

7. **Push to your fork**:
```bash
git push origin feature/your-feature-name
```

8. **Create a Pull Request** on GitHub

## 📝 Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### Examples

```bash
git commit -m "feat: add newsletter subscription component"
git commit -m "fix: resolve contact form validation issue"
git commit -m "docs: update deployment guide"
git commit -m "style: format code with prettier"
```

## 🎯 Development Guidelines

### Code Style

- Use **TypeScript** for type safety
- Follow **ESLint** rules
- Use **Tailwind CSS** for styling
- Keep components **small and focused**
- Write **descriptive variable names**
- Add **comments** for complex logic

### Component Structure

```tsx
'use client' // If using client-side features

import { /* imports */ } from 'package'
import { /* types */ } from '@/types'

// Component interfaces
interface ComponentProps {
  // props
}

// Main component
export default function Component({ props }: ComponentProps) {
  // State and hooks
  
  // Event handlers
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  )
}
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `Hero.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Types: `index.ts` in types folder
- API routes: `route.ts`

### Adding New Features

1. **Create the component** in appropriate directory
2. **Add types** in `types/index.ts`
3. **Update documentation** in README.md
4. **Test thoroughly** on all screen sizes
5. **Verify dark mode** compatibility

## 🧪 Testing

Before submitting a PR:

```bash
# Check TypeScript types
npx tsc --noEmit

# Run linting
npm run lint

# Test in development
npm run dev

# Build for production
npm run build

# Test production build
npm start
```

## 📱 Responsive Design Testing

Test on multiple screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🎨 Adding New Sections

To add a new section:

1. **Create component**:
```tsx
// components/sections/NewSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/lib/hooks'

export default function NewSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  return (
    <section id="new-section" className="py-20">
      {/* Your content */}
    </section>
  )
}
```

2. **Add to page**:
```tsx
// app/page.tsx
import NewSection from '@/components/sections/NewSection'

export default function Home() {
  return (
    <>
      {/* Other sections */}
      <NewSection />
    </>
  )
}
```

3. **Add navigation link**:
```tsx
// components/Navbar.tsx
const navigation: NavigationItem[] = [
  // ...
  { name: 'New Section', href: '#new-section' },
]
```

## 🔧 Environment Variables

Never commit `.env.local` to the repository. Always use `.env.local.example` as a template.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description** of the issue
2. **Steps to reproduce**
3. **Expected behavior**
4. **Actual behavior**
5. **Screenshots** (if applicable)
6. **Browser/Device** information

## 💡 Suggesting Features

Feature suggestions are welcome! Please provide:

1. **Clear description** of the feature
2. **Use case** - Why is it needed?
3. **Examples** or mockups (if possible)

## ❓ Questions?

Feel free to open an issue for any questions or discussions.

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
