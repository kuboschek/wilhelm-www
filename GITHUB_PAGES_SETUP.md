# GitHub Pages Deployment Guide

## Overview

This repository is now configured to automatically deploy to GitHub Pages with the custom domain `wilhelm.kuboschek.ch`.

## What's Been Configured

### 1. GitHub Actions Workflow

Created `.github/workflows/deploy.yml` that:
- Triggers on every push to the `main` branch
- Builds the Docusaurus site with production settings
- Deploys the built site to GitHub Pages
- Supports manual triggering via workflow_dispatch

### 2. Docusaurus Configuration

Updated `docusaurus.config.js` with:
```javascript
organizationName: "kuboschek"
projectName: "wilhelm-www"
```

These settings ensure the correct GitHub Pages URL structure.

### 3. Custom Domain Setup

- Created `static/CNAME` file containing `wilhelm.kuboschek.ch`
- This file is automatically copied to the build output
- GitHub Pages will use this to configure the custom domain

### 4. Node.js Version

- Added `.nvmrc` file specifying Node.js version 20
- Ensures consistent builds across different environments

## Required Steps to Complete Setup

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/kuboschek/wilhelm-www
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The workflow will automatically deploy on the next push to main

### Step 2: Configure DNS for Custom Domain

You need to configure DNS records for `wilhelm.kuboschek.ch`:

**Option A: Using CNAME (Recommended)**
```
Type: CNAME
Name: wilhelm.kuboschek.ch
Value: kuboschek.github.io
TTL: 3600 (or auto)
```

**Option B: Using A Records**
If you prefer A records, add these four records:
```
Type: A
Name: wilhelm.kuboschek.ch
Value: 185.199.108.153
---
Type: A
Name: wilhelm.kuboschek.ch
Value: 185.199.109.153
---
Type: A
Name: wilhelm.kuboschek.ch
Value: 185.199.110.153
---
Type: A
Name: wilhelm.kuboschek.ch
Value: 185.199.111.153
```

### Step 3: Verify DNS Propagation

After configuring DNS, verify it's working:
```bash
# Check CNAME record
dig wilhelm.kuboschek.ch CNAME

# Check A records
dig wilhelm.kuboschek.ch A

# Or use nslookup
nslookup wilhelm.kuboschek.ch
```

DNS propagation can take up to 48 hours, but usually completes within a few hours.

### Step 4: Enable HTTPS

Once DNS is configured:
1. Go to **Settings** → **Pages** in your repository
2. Check **Enforce HTTPS** (this may take a few minutes to become available)
3. GitHub will automatically provision an SSL certificate via Let's Encrypt

## Testing the Deployment

### Manual Trigger

You can manually trigger a deployment:
1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Automatic Deployment

Every push to the `main` branch will automatically trigger a deployment.

## Deployment URLs

- **GitHub Pages Default**: https://kuboschek.github.io/wilhelm-www/
- **Custom Domain** (after DNS setup): https://wilhelm.kuboschek.ch

## Monitoring Deployments

1. Go to the **Actions** tab in your repository
2. Click on any workflow run to see detailed logs
3. Check the **deploy** job for deployment status and URL

## Troubleshooting

### Custom Domain Not Working

1. Verify DNS records are correctly configured
2. Wait for DNS propagation (up to 48 hours)
3. Check the CNAME file exists in the deployed site
4. Verify GitHub Pages is configured to use GitHub Actions as source

### Build Failures

1. Check the workflow logs in the Actions tab
2. Common issues:
   - Node.js version mismatch (should use version 20)
   - Missing dependencies
   - Build errors in Docusaurus

### HTTPS Not Available

1. Ensure DNS is fully propagated
2. Wait a few hours after DNS configuration
3. GitHub needs to provision the SSL certificate

## Additional Configuration

### Environment Variables

The build uses these environment variables:
- `SITE_URL`: https://wilhelm.kuboschek.ch
- `BASE_URL`: /

These are set in the workflow file and can be modified if needed.

### Build Output

The build creates a `build/` directory containing:
- Static HTML, CSS, and JavaScript files
- All assets and images
- CNAME file for custom domain

This directory is what gets deployed to GitHub Pages.

## Workflow Permissions

The workflow has these permissions:
- `contents: read` - To checkout the repository
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For GitHub's OIDC authentication

These are already configured in the workflow file.

## Next Steps

1. Merge this PR to the main branch
2. Configure GitHub Pages settings (Step 1 above)
3. Set up DNS records (Step 2 above)
4. Wait for DNS propagation
5. Enable HTTPS
6. Visit https://wilhelm.kuboschek.ch to see your site live!

## Support

If you encounter issues:
- Check GitHub Actions logs for build errors
- Verify DNS configuration with `dig` or `nslookup`
- Ensure GitHub Pages is set to use GitHub Actions as the source
- Review GitHub Pages documentation: https://docs.github.com/en/pages
