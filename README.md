# Parkpage

A dirt simple packing page that can be deployed and adapted using a CI/CD easily.

## Overview

This app was written to easily create a parking page for dozens of domain names with minimal per-domain configuration.
The origin of this project was to use the CI/CD/CDN features of [netlify](https://netlify.com) to automatically push a
parking page to a fleet of 50+ unused domains to both reflect the status of the domains and showcase other projects. A
developer can fork this repo and deploy the built application using the netlify interface in minutes.

I have this project set up as multiple deployments within netlify with different environment variables for each, allowing
me to separate the per-domain configuration from the codebase. Another future addition will be a published container that
could also be used in my Kubernetes clusters as multiple deployments with separate environment variables in the same fashion.


## Getting Started

This app works with very minimal configuration, simply fork this project, modify the projects.json file to include things you
want to show off. Then set up your CI/CD to automatically deploy the app to your parked domains. Tweak the design and layout
as you want and pull in upstream changes as needed. 


## Configuration
Parkpage can be made to be domain specific using several environment variables at build time.

Environment Variable | Default Value | Description
------|-------|-----
REACT_APP_FOR_SALE | `true` | String "true" or "false" indicating whether the domain is for sale or not.
REACT_APP_IN_USE | `true` | String "true" or "false" indicating whether the domain is in use currently.
REACT_APP_DOMAIN | `example.com` | How the domain should be referred to, defaults to "example.com" but also makes sense as a brief sentence.
REACT_APP_CONTACT_EMAIL | `person@example.com` | The email at which the owner or operator can be reached.

For development purposes, the `.env` file contains default values for the maximum text output.