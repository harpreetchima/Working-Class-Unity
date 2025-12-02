# Dockerfile for Nuxt 4 SSR Deployment
# Uses Node 22 to meet Nuxt 4.2.1 requirements (^20.19.0 || >=22.12.0)

FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Upgrade npm to fix oxc-parser native binary issue (fixed in npm 11.6.2+)
# Then install dependencies using package-lock.json for reproducible builds
# See: https://github.com/npm/cli/issues/4828
RUN npm install -g npm@latest && npm ci

# Copy the rest of the application
COPY . .

# Build the Nuxt application
RUN npm run build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

# Copy only the built output from builder stage
COPY --from=builder /app/.output .output

# Set production environment
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Start the Nuxt server
CMD ["node", ".output/server/index.mjs"]
