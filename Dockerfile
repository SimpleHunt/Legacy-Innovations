# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Prisma + SSL deps
RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./
RUN npm ci

COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js
RUN npm run build

# ---------- Runner ----------
FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
