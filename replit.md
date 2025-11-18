# GeniTeacher

## Overview

GeniTeacher is an educational management platform designed for teachers to manage classes, students, schedules, and learning materials. The application provides dashboards for monitoring student performance, tracking at-risk students, managing class schedules, and organizing educational resources. The platform uses a modern React-based frontend with TypeScript for type safety and maintainability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Problem**: Need a responsive, type-safe single-page application for teacher workflow management

**Solution**: React 19 with TypeScript and Vite build tooling

- **Framework**: React 19.2.0 with TypeScript for component-based UI development
- **Build Tool**: Vite 7.2.2 for fast development and optimized production builds
- **Module System**: ESNext modules with bundler resolution for modern JavaScript features
- **Development Server**: Configured to run on host 0.0.0.0:5000 for network accessibility

**Rationale**: React provides excellent component reusability, Vite offers superior development experience with hot module replacement, and TypeScript ensures type safety reducing runtime errors

### Component Structure

**Problem**: Need reusable UI components for consistent user experience

**Solution**: Component-based architecture organized by feature and function

- **Layout Components**: `DashboardLayout` provides the main application shell with sidebar and topbar
- **Feature Components**: Specialized components like `ClassCard` for domain-specific functionality
- **Common Components**: Reusable `Card`, `ChartCard`, `Table`, and `TabBar` for consistent UI patterns
- **Page Components**: Organized by feature area (Dashboard, Class, Schedule, Library)

**Rationale**: Feature-based organization improves maintainability and code discovery; shared common components ensure UI consistency

### Navigation Architecture

**Problem**: Need simple navigation without URL routing complexity

**Solution**: Client-side state-based navigation using React state management

- **Navigation State**: Managed through `currentPage` state in main `App` component
- **Page Types**: Union type `'dashboard' | 'class' | 'schedule' | 'library'` for type-safe navigation
- **Props Drilling**: Navigation callbacks passed through layout to sidebar component

**Alternatives Considered**: React Router (installed but not implemented)

**Rationale**: State-based navigation is simpler for MVP, though the presence of `react-router-dom` in dependencies suggests potential future migration to URL-based routing

### Styling Approach

**Problem**: Need quick styling solution without additional dependencies

**Solution**: Inline styles with CSS custom properties

- **Method**: Direct style objects in JSX for component-specific styling
- **Global Styles**: Minimal global CSS in `index.css` for resets and base styles
- **Color Palette**: Hardcoded color values (e.g., `#3498db`, `#2c3e50`) for primary UI elements

**Pros**: Zero build step for styling, fast iteration, no CSS naming conflicts

**Cons**: Limited reusability, harder to maintain consistent theming, no responsive utilities

**Rationale**: Suitable for rapid prototyping; likely needs migration to CSS modules or styled-components for production

### Type Safety

**Problem**: Need to prevent runtime type errors in teacher-facing application

**Solution**: Strict TypeScript configuration with comprehensive linting

- **TypeScript**: Version 5.9.3 with strict mode enabled
- **Compiler Options**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch` for strict checking
- **ESLint**: Configured with TypeScript ESLint, React Hooks, and React Refresh plugins
- **Type Definitions**: Explicit interfaces for props (e.g., `ClassCardProps`, `TableProps`)

**Rationale**: Strict typing catches errors at compile time, improves IDE support, and serves as inline documentation

### Data Management

**Problem**: Need to display class and student data in UI

**Solution**: Currently using local state with mock data

- **State Management**: React useState for component-level state
- **Mock Data**: Hardcoded arrays of class data (16 classes across 3 grade levels)
- **Data Structure**: Typed interfaces defining class structure with properties like `totalStudents`, `atRiskStudents`, `achievementRate`

**Note**: No backend integration or API layer currently implemented; data persists only in component state

**Rationale**: Sufficient for UI prototyping; will require backend API integration for production use

## External Dependencies

### Build and Development Tools

- **Vite**: Modern build tool and development server
- **@vitejs/plugin-react**: Official React plugin for Vite supporting Fast Refresh
- **TypeScript**: Type-safe JavaScript with version ~5.9.3

### Frontend Framework and Libraries

- **React**: Version 19.2.0 core library
- **react-dom**: React DOM rendering
- **react-router-dom**: Version 7.9.6 (installed but not currently utilized in codebase)

### Code Quality Tools

- **ESLint**: Version 9.39.1 for code linting
- **typescript-eslint**: TypeScript-specific ESLint rules
- **eslint-plugin-react-hooks**: Enforces React Hooks rules
- **eslint-plugin-react-refresh**: Ensures Fast Refresh compatibility
- **@eslint/js**: Core ESLint JavaScript rules
- **globals**: Global variable definitions for linting

### Type Definitions

- **@types/react**: Type definitions for React 19.2.2
- **@types/react-dom**: Type definitions for React DOM 19.2.2
- **@types/node**: Type definitions for Node.js (versions 22.13.11 and 24.10.0 across root and frontend)

### Future Integration Points

**Note**: The following are not yet implemented but likely needed for full application functionality:

- **Backend API**: No API client or HTTP library currently configured
- **State Management**: May need Redux, Zustand, or similar for complex state as application grows
- **Authentication**: No auth system currently present; will need implementation for multi-teacher support
- **Database**: No database layer; will need backend with persistent storage
- **Chart Library**: `ChartCard` components exist but no charting library installed (consider Chart.js, Recharts, or similar)