# ---------- Builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat openssl

COPY package*.json ./
RUN npm ci

# ✅ Copy REAL Prisma schema
COPY prisma ./prisma
RUN npx prisma generate

# ✅ Copy rest of the source
COPY . .
RUN npm run build

# ---------- Runner ----------
FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
