FROM node:24-alpine AS base

FROM base AS builder
ARG APP
RUN apk add --no-cache libc6-compat curl

WORKDIR /app

COPY . .
RUN cp ./${APP}/.env.build .env && cat .env

RUN npm ci && npm run build && npm run start

FROM base AS runner
ARG APP
ENV APP=${APP}

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/${APP}/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/${APP}/.next/standalone/apps/${APP} ./
COPY --from=builder --chown=nextjs:nodejs /app/${APP}/.next/standalone/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/${APP}/.next/standalone/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/${APP}/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
#CMD ["sh", "-c", "echo 'Starting app: ${APP}'; node apps/${APP}/server.js"]