# Product screenshots

Real screenshots of the rwaShift Real Estate app, used in the persona walkthrough sections
(Issuer, Investor, Platform Admin) on the homepage and `/product`. Referenced directly from
`content/data.ts` (`ISSUER_STEPS`, `INVESTOR_STEPS`, `ADMIN_STEPS`) — if you replace a file,
keep the same filename or update the matching `image.src` there.

## issuer/
- `1-dashboard.png` — issuer dashboard (assets, tokenized value, capital raised, offerings)
- `2-offerings.png` — offerings list (raise target, units issued, funded %, status)
- `3-assets.png` — asset list (valuation, verification status)
- `4-reports.png` — reporting charts (offering progress, capital raised vs. target)

## investor/
- `1-portfolio.png` — investor portfolio (total invested, active investments, units owned)
- `2-transactions.png` — transaction history
- `3-distributions.png` — distributions received
- `4-activity.png` — platform activity feed

## admin/
- `1-dashboard.png` — platform admin dashboard (organizations, offerings, pending approvals, KYC reviews)
- `2-compliance.png` — compliance / pending payment confirmations
- `3-blockchain.png` — on-chain transaction status
- `4-audit.png` — audit log

## Replacing a screenshot
- Keep the same filename, or update the corresponding `image.src` in `content/data.ts`.
- Crop out anything that isn't sample/demo data before replacing a file.
- Keep each file under ~500KB so the page stays fast.
- Current screenshots are 1440×560 (~2.57:1, matching the app's actual dashboard layout). The display frame in `AlternatingSteps` is set to that same ratio (`aspect-[18/7]`) so nothing gets cropped — if a replacement image has a meaningfully different aspect ratio, update that class too.
