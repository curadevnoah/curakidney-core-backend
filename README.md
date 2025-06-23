# CuraKidney Core Backend

A comprehensive NestJS-based backend API for the CuraKidney platform, providing healthcare management services for nephrologists and patients.

## 🏥 Project Overview

CuraKidney Core Backend is a robust healthcare management system built with NestJS, designed to handle patient data, treatment management, doctor verification, and external medical data integration. The platform provides secure authentication, role-based access control, and comprehensive API documentation.

### Key Features

- **Authentication & Authorization**: JWT-based authentication with role-based access control
- **User Management**: Multi-role user system (nephrologists, patients, admins)
- **Patient Management**: Comprehensive patient data and treatment tracking
- **Doctor Verification**: Streamlined doctor verification process
- **External Data Integration**: Integration with medical data providers (MediPad)
- **Email Services**: Automated email notifications and welcome messages
- **Two-Factor Authentication**: OTP-based security enhancement
- **API Documentation**: Swagger/OpenAPI documentation with authentication

## 🛠 Tech Stack

- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with Passport.js
- **Email**: Nodemailer with Handlebars templates
- **Documentation**: Swagger/OpenAPI
- **Validation**: Class-validator & Class-transformer
- **Testing**: Jest for unit and e2e testing

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/curadevnoah/curakidney-core-backend
cd curakidney-core-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/curakidney_db"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key"
JWT_REFRESH_SECRET="your-super-secret-refresh-key"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Application
PORT=3000
NODE_ENV=development

# Swagger Documentation
SWAGGER_USER="admin"
SWAGGER_PASSWORD="admin"

# External APIs (if applicable)
MEDIPAD_API_KEY="your-medipad-api-key"
MEDIPAD_BASE_URL="https://api.medipad.com"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# Seed the database with initial data
npm run db:seed
```

### 5. Start the Application

#### Development Mode
```bash
npm run start:dev
```

#### Production Mode
```bash
npm run build
npm run start:prod
```

## 📚 API Documentation

The CuraKidney API provides comprehensive Swagger/OpenAPI documentation for all endpoints.

### 🔗 Accessing the Documentation

#### Local Development
Once the application is running locally, you can access the API documentation at:

- **Swagger UI**: `http://localhost:3000/api-docs`
- **API JSON Schema**: `http://localhost:3000/api-docs-json`

#### Production Environment
The production API documentation is available at:

- **Swagger UI**: `https://railway.pp/api-docs`
- **API JSON Schema**: `https://railway.pp/api-docs-json`

### 🔐 Authentication

The documentation is protected with basic authentication. Use the credentials specified in your environment variables:

- **Username**: `admin` (default) or the value of `SWAGGER_USER`
- **Password**: `admin` (default) or the value of `SWAGGER_PASSWORD`

### 📖 Documentation Features

- **Interactive Testing**: Test API endpoints directly from the Swagger UI
- **Request/Response Examples**: View sample requests and responses
- **Authentication**: JWT Bearer token authentication support
- **Schema Validation**: Detailed request/response schemas
- **Endpoint Descriptions**: Comprehensive documentation for each endpoint

### 🚀 Getting Started with the API

1. **Access the Documentation**: Navigate to the Swagger UI URL
2. **Authenticate**: Use the basic auth credentials to access the docs
3. **Explore Endpoints**: Browse available endpoints by module
4. **Test Endpoints**: Use the "Try it out" feature to test API calls
5. **Get Bearer Token**: Use the `/auth/login` endpoint to obtain a JWT token
6. **Authorize**: Click "Authorize" in Swagger UI and enter your Bearer token

### 📋 Available API Modules

- **Authentication** (`/auth/*`) - Login, registration, OTP verification
- **Users** (`/users/*`) - User management and profiles
- **User Roles** (`/user-roles/*`) - Role-based access control
- **Doctors** (`/doctors/*`) - Doctor-specific operations
- **Patients** (`/patients/*`) - Patient data management
- **Patient Treatments** (`/patient-treatments/*`) - Treatment tracking
- **External Data** (`/external-data/*`) - Third-party integrations

## 🧪 Testing

### Run Tests

```bash
# Unit tests
npm run test

# Unit tests with coverage
npm run test:cov

# E2E tests
npm run test:e2e

# Test in watch mode
npm run test:watch
```

### Database Testing

```bash
# Reset database and run migrations
npm run db:reset
```

## 📁 Project Structure

```
src/
├── _app/                    # Core application files
├── modules/                 # Feature modules
│   ├── auth/               # Authentication & authorization
│   ├── users/              # User management
│   ├── user-roles/         # Role management
│   ├── doctors/            # Doctor-specific features
│   ├── patients/           # Patient management
│   ├── patient-treatments/ # Treatment tracking
│   ├── email/              # Email services
│   └── external-data/      # External API integrations
├── prisma/                 # Database schema and migrations
├── utils/                  # Utility functions
└── mock-data/              # Mock data for development
```

## 🔧 Available Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with hot reload
- `npm run start:debug` - Start in debug mode
- `npm run start:prod` - Start in production mode
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run routes` - Display all available routes
- `npm run db:seed` - Seed the database
- `npm run db:reset` - Reset and reseed the database

## 🚀 Deployment

### Automatic Deployment

This project is configured for automatic deployment to Railway. When code is pushed to the `main` branch, it automatically triggers deployment to:

**Production URL**: https://railway.pp

### Deployment Process

1. **Push to Main Branch**: Any direct push to the `main` branch triggers the deployment pipeline
2. **Build Process**: Railway automatically builds the application using the build script
3. **Database Migration**: Prisma migrations are automatically applied
4. **Environment Variables**: Ensure all required environment variables are configured in Railway
5. **Health Check**: The application includes health check endpoints for monitoring

### Manual Deployment

If you need to deploy manually:

1. Ensure all tests pass: `npm run test`
2. Build the application: `npm run build`
3. Deploy to your preferred platform (Railway, Heroku, AWS, etc.)
4. Configure environment variables on the deployment platform
5. Run database migrations: `npx prisma migrate deploy`

## 🔐 Security Features

- JWT-based authentication with refresh tokens
- Password hashing with bcrypt
- Role-based access control
- Input validation and sanitization
- CORS configuration
- Rate limiting (configurable)
- Secure headers

## 📊 Database Schema

The application uses PostgreSQL with the following main entities:

- **Users**: User accounts with role-based permissions
- **UserRoles**: Role definitions and permissions
- **Patients**: Patient information and medical records
- **PatientTreatments**: Treatment tracking and history
- **Doctors**: Doctor-specific information and verification
- **OtpCodes**: Two-factor authentication codes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**CuraKidney Core Backend** - Empowering healthcare through technology