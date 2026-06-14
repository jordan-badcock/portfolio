# Jordan Badcock — Portfolio

Personal portfolio site for Jordan Badcock, Cloud & AI Engineer.

**Live:** [CloudFront URL — to be added after deploy]

## Stack

- React 18 + Vite
- Tailwind CSS v3
- Hosted on AWS S3 + CloudFront
- Deployed via GitHub Actions on push to `main`

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which:

1. Builds the site
2. Syncs `dist/` to the S3 bucket
3. Invalidates the CloudFront distribution

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret |
| `AWS_BUCKET_NAME` | S3 bucket name |
| `AWS_CF_DIST_ID` | CloudFront distribution ID |
| `AWS_REGION` | AWS region (e.g. `ca-central-1`) |

### One-time AWS Setup

1. **S3 bucket** — static website hosting enabled, public `GetObject` policy
2. **CloudFront** — origin pointing to S3 website endpoint, default root `index.html`, custom error page `404 → /index.html`
3. **IAM user** — permissions: `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket`, `cloudfront:CreateInvalidation`
